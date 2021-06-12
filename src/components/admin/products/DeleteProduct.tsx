import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import Modal from "../../Modal";
import Item, {HeaderItem} from "../../Item";
import {EnumProductRedux, ProductActions} from "../../../redux/product";

interface OwnProps {
    open: boolean
    setOpen: Function
    headers: HeaderItem[]
}

type Props = OwnProps;

const DeleteProduct: FunctionComponent<Props> = ({open, setOpen, headers}) => {
    const selectedProduct = useSelector((store: IGeneralStore) => store.product.selectedProduct)
    const loading = useSelector((store: IGeneralStore) => store.product.loading)
    const dispatch = useDispatch()
    const handleCancel = () => {
        dispatch({type: EnumProductRedux.Set, payload: null})
        setOpen(false)
    }
    const handleConfirm = () => {
        dispatch(ProductActions.delete(selectedProduct.id ?? 0))
        setOpen(false)
    }
    return (
        <Modal title="Delete" loading={loading} open={open} hasButtons={true} handleDone={handleConfirm}
               handleClose={handleCancel}>
            <Item object={selectedProduct} headers={headers}/>
        </Modal>
    );
};

export default DeleteProduct;
