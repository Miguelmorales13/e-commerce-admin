import React, {FunctionComponent, useEffect, useState} from 'react';
import Modal from "../../Modal";
import FormFlex from "../../forms/FormFlex";
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import {makeStyles} from "@material-ui/core/styles";
import {ValidationsForm} from "../../../utils";
import {object} from "yup";
import {IProduct} from "../../../models/IProduct.model";
import {EnumProductRedux, ProductActions} from "../../../redux/product";
import {inputsProduct} from "../../../data-modeler";
import {CategoryProductActions} from "../../../redux/category-product";
import {AppBar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Tab, Tabs, Typography} from "@material-ui/core";
import TabPanel, {getPropsTabs} from "../../FormTab";
import FormImageProduct from "./FormImageProduct";
import {Create, Delete} from "@material-ui/icons";

interface OwnProps {
    open: boolean
    setOpen: any
}

type Props = OwnProps;

const useStyles = makeStyles((theme) => ({
    switch: {
        display: "flex",
        justifyContent: 'flex-end'
    }, container: {
        marginBottom: theme.spacing(0.5)
    },
    itemCard: {
        padding: theme.spacing(1)
    }, image: {
        width: '100%',
        minHeight: theme.spacing(10),
        minWidth: theme.spacing(10),
        height: '100%',
    },
    actions: {
        padding: 'none'
    },
    cardContents: {
        padding: theme.spacing(0.5)
    }

}))

const schema = object().shape({
    name: ValidationsForm.reqWithSizeMinMax(3, 30),
    priceDiscount: ValidationsForm.reqNumberMin(1),
    brand: ValidationsForm.reqWithSizeMinMax(2, 100),
    price: ValidationsForm.reqNumberMin(1),
    categoryId: ValidationsForm.reqNumberMin(1),
})

const FormProduct: FunctionComponent<Props> = ({open, setOpen}) => {
    const dispatch = useDispatch()
    const selectedProduct = useSelector((store: IGeneralStore) => store.product.selectedProduct)
    const loading = useSelector((store: IGeneralStore) => store.product.loading)
    const categories = useSelector((store: IGeneralStore) => store.categoryProduct.categoryProducts)
    const classes = useStyles()
    const [image, setImage] = useState({})
    const handleCancelImage = () => setImage({})
    useEffect(() => {
        dispatch(CategoryProductActions.getAll())
    }, [dispatch])

    const handleSubmit = (values: IProduct) => {
        const {id} = selectedProduct
        if (id) {
            dispatch(ProductActions.update({...values, id}))
        } else {
            dispatch(ProductActions.create(values))
        }
        setOpen(false)
    }
    const handleCancel = () => {
        setOpen(false)
        dispatch({type: EnumProductRedux.Set, payload: null})
    }

    const isUpdate = selectedProduct.id
    const initialValues: IProduct = selectedProduct.id ? Object.assign({}, selectedProduct) : {
        name: '',
        active: true,
        priceDiscount: 0.0,
        price: 0.0,
        brand: '',
        images: [],
        categoryId: 0,
        isInDiscount: false,
        description: '',
        hasMultiplesImages: false,
        mainImage: ''
    }
    const [value, setValue] = useState(0);
    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <Modal open={open} hasButtons={false} loading={loading} title={isUpdate ? 'Update' : 'Add'}>
            <AppBar position="static" elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="Product" centered>
                    <Tab label="Product" {...getPropsTabs(0)} />
                    <Tab label="Images" {...getPropsTabs(1)} disabled={!selectedProduct.id}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <FormFlex inputs={inputsProduct(categories, classes.switch, handleCancel)} schema={schema} handleSubmit={handleSubmit} initialValues={initialValues}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FormImageProduct handleClose={handleCancel} handleCancel={handleCancelImage} selectedImage={image}
                                  productId={selectedProduct?.id || 0}/>
                <Grid container className={classes.container}>
                    {
                        initialValues.images && initialValues.images.map((image) => (
                            <Grid key={image.id} className={classes.itemCard} item xs={12} md={6}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia className={classes.image} image={image.file}/>
                                    </CardActionArea>
                                    <CardContent className={classes.cardContents}>
                                        <Typography variant="h6">{image.title}</Typography>
                                    </CardContent>
                                    <CardActions className={classes.actions}>
                                        <Box display="flex" width="100%" justifyContent="space-between">
                                            <IconButton onClick={() => setImage(image)} color="primary"> <Delete/>
                                            </IconButton>
                                            <IconButton onClick={() => setImage(image)} color="secondary"> <Create/>
                                            </IconButton>

                                        </Box>
                                    </CardActions>

                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </TabPanel>
        </Modal>
    );
};

export default FormProduct;

