import React, {FunctionComponent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CategoryProductActions, EnumCategoryProductRedux} from "../../redux/category-product";
import {Box, Card, Grid, IconButton, Typography} from "@material-ui/core";
import FormCategoryProduct from "../../components/admin/category-product/FormCategoryProduct";
import DeleteCategoryProduct from "../../components/admin/category-product/DeleteCategoryProduct";
import {Add, Create, Delete} from "@material-ui/icons";
import {IGeneralStore} from "../../redux";
import TableResponsive from "../../components/tables/TableResponsive";
import {IButtonTable} from "../../models/IButtonTable";
import {filtersCategoryProduct, headersCategoryProduct} from "../../data-modeler";
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

const CategoryProductsPage: FunctionComponent<Props> = (props) => {
    const classes = useStyles()
    const [openForm, setOpenForm] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const loading = useSelector((store: IGeneralStore) => store.categoryProduct.loading)
    const categoryProducts = useSelector((store: IGeneralStore) => store.categoryProduct.categoryProducts)
    const onEdit = (row: any) => {
        dispatch({type: EnumCategoryProductRedux.Set, payload: row})
        setOpenForm(true)
    }
    const onDelete = (row: any) => {
        dispatch({type: EnumCategoryProductRedux.Set, payload: row})
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
    const headersItem: HeaderItem[] = [{key: 'name', headerName: '', title: 'tables.categoryProducts.name'}]
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(CategoryProductActions.getAll())
    }, [dispatch])
    return (
        <>
            <DeleteCategoryProduct open={openDelete} setOpen={setOpenDelete} headers={headersItem}/>
            <FormCategoryProduct open={openForm} setOpen={setOpenForm}/>
            <Card className={classes.header} elevation={0}>
                <Typography variant="h6">CategoryProducts</Typography>

                <IconButton disabled={loading} size="small" onClick={() => setOpenForm(true)} color="inherit">
                    <Add/>
                </IconButton>

            </Card>
            <Grid component={Box} overflow="auto" container>
                <Grid item sm={12}>
                    <TableResponsive headers={headersCategoryProduct(buttons)} loading={loading} rows={categoryProducts}
                                     filters={filtersCategoryProduct}/>
                </Grid>
            </Grid>
        </>
    )
        ;
};

export default CategoryProductsPage;
