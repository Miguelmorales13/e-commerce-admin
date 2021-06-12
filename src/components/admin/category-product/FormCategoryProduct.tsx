import React, {FunctionComponent} from 'react';
import Modal from "../../Modal";
import FormFlex from "../../forms/FormFlex";
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import {makeStyles} from "@material-ui/core/styles";
import {ValidationsForm} from "../../../utils";
import {object} from "yup";
import {ICategoryProduct} from "../../../models/ICategoryProduct.model";
import {CategoryProductActions, EnumCategoryProductRedux} from "../../../redux/category-product";
import {inputsCategoryProduct} from "../../../data-modeler";
import {Box, Typography} from "@material-ui/core";

interface OwnProps {
    open: boolean
    setOpen: any
}

type Props = OwnProps;

const useStyles = makeStyles((theme) => ({
    switch: {
        display: "flex",
        justifyContent: 'flex-end'
    }
}))

const schema = object().shape({
    name: ValidationsForm.reqWithSizeMinMax(3, 30),
})

const FormCategoryProduct: FunctionComponent<Props> = ({open, setOpen}) => {
    const dispatch = useDispatch()
    const selectedCategoryProduct = useSelector((store: IGeneralStore) => store.categoryProduct.selectedCategoryProduct)
    const categoryProducts = useSelector((store: IGeneralStore) => store.categoryProduct.categoryProducts)
    const loading = useSelector((store: IGeneralStore) => store.categoryProduct.loading)
    const classes = useStyles()


    const handleSubmit = (values: ICategoryProduct) => {
        const {id} = selectedCategoryProduct
        if (id) {
            dispatch(CategoryProductActions.update({...values, id}))
        } else {
            dispatch(CategoryProductActions.create(values))
        }
        setOpen(false)
    }
    const handleCancel = () => {
        setOpen(false)
        dispatch({type: EnumCategoryProductRedux.Set, payload: null})
    }

    const isUpdate = selectedCategoryProduct.id
    const initialValues: ICategoryProduct = selectedCategoryProduct.id ? Object.assign({}, selectedCategoryProduct) : {
        name: '',
        categoryId: 0,
    }
    return (
        <Modal open={open} hasButtons={false} loading={loading} title={isUpdate ? 'Update' : 'Add'}>
            <Box p={0.7}>
                <Typography variant="body1">
                    Hi... In this section is to add a category or update category, ✨ because these help us to section our products 📦.
                </Typography>
                <br/>
                <Typography variant="body2">
                    You can add category to another category and this becomes in a subcategory,🎇 you can try to add up to level 3 an you have to stop 🛑.
                </Typography>

            </Box>
            <FormFlex inputs={inputsCategoryProduct(categoryProducts, classes.switch, handleCancel)} schema={schema} handleSubmit={handleSubmit} initialValues={initialValues}/>
        </Modal>
    );
};

export default FormCategoryProduct;

