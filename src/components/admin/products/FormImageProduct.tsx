import React, {FunctionComponent} from 'react';
import {useDispatch} from "react-redux";
import FormFlex from "../../forms/FormFlex";
import {object} from "yup";
import {Box, Typography} from "@material-ui/core";
import {IImageProduct} from "../../../models/IImageProduct.model";
import {ProductActions} from "../../../redux/product";
import {inputsImageProduct} from "../../../data-modeler";

interface OwnProps {
    selectedImage: IImageProduct
    productId: number
    handleCancel: () => void
    handleClose: () => void
}

type Props = OwnProps;
const schema = object().shape({})
const FormImageProduct: FunctionComponent<Props> = ({selectedImage, handleClose, handleCancel, productId}) => {
    const dispatch = useDispatch()
    const initialValues: IImageProduct = selectedImage.id ? Object.assign({}, selectedImage) : {
        title: '',
        file: '',
        productId,
    }
    const handleSubmit = (values: IImageProduct) => {
        const {id} = selectedImage
        if (id) {
            dispatch(ProductActions.UpdateImage({...values, id}))
        } else {
            dispatch(ProductActions.CreateImage(values))
        }
    }


    return (
        <Box>
            <Typography variant="h5"> {selectedImage.id ? 'Update image' : 'Add image'}</Typography>
            <FormFlex inputs={inputsImageProduct(handleClose, handleCancel)} schema={schema} handleSubmit={handleSubmit} initialValues={initialValues}/>
        </Box>

    );
};

export default FormImageProduct;
