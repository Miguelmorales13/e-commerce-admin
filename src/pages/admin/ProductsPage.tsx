import React, {FunctionComponent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {EnumProductRedux, ProductActions} from "../../redux/product";
import {Box, Card, Grid, IconButton, Typography} from "@material-ui/core";
import FormProduct from "../../components/admin/products/FormProduct";
import DeleteProduct from "../../components/admin/products/DeleteProduct";
import {Add, Create, Delete} from "@material-ui/icons";
import {IGeneralStore} from "../../redux";
import TableResponsive from "../../components/tables/TableResponsive";
import {IButtonTable} from "../../models/IButtonTable";
import {filtersProduct, headersProduct} from "../../data-modeler";
import {HeaderItem} from "../../components/Item";
import {makeStyles} from "@material-ui/core/styles";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main
    }
}))

const ProductsPage: FunctionComponent<Props> = (props) => {
    const classes = useStyles()
    const [openForm, setOpenForm] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const loading = useSelector((store: IGeneralStore) => store.product.loading)
    const products = useSelector((store: IGeneralStore) => store.product.products)
    const onEdit = (row: any) => {
        dispatch({type: EnumProductRedux.Set, payload: row})
        setOpenForm(true)
    }
    const onDelete = (row: any) => {
        dispatch({type: EnumProductRedux.Set, payload: row})
        setOpenDelete(true)
    }

    const buttons: IButtonTable[] = [
        {
            component: IconButton,
            props: {disabled: loading, size: "small", color: "primary", children: <Delete/>},
            handler: onDelete
        }, {
            component: IconButton,
            props: {disabled: loading, size: "small", color: "secondary", children: <Create/>},
            handler: onEdit
        },]
    // @ts-ignore
    const headersItem: HeaderItem[] = [{key: 'name', headerName: '', title: 'tables.products.name'}]
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(ProductActions.getAll())
    }, [dispatch])
    return (
        <>
            <DeleteProduct open={openDelete} setOpen={setOpenDelete} headers={headersItem}/>
            <FormProduct open={openForm} setOpen={setOpenForm}/>
            <Card className={classes.header} elevation={0}>
                <Typography variant="h6">Products</Typography>

                <IconButton disabled={loading} size="small" onClick={() => setOpenForm(true)} color="inherit">
                    <Add/>
                </IconButton>


            </Card>
            <Grid component={Box} overflow="auto" container>
                <Grid item sm={12}>
                    <TableResponsive headers={headersProduct(buttons)} loading={loading} rows={products}
                                     filters={filtersProduct}/>
                </Grid>
            </Grid>
        </>
    )
        ;
};

export default ProductsPage;
