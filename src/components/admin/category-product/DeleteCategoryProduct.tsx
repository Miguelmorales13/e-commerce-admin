import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import Modal from "../../Modal";
import Item, {HeaderItem} from "../../Item";
import {CategoryProductActions, EnumCategoryProductRedux} from "../../../redux/category-product";

interface OwnProps {
    open: boolean
    setOpen: Function
    headers: HeaderItem[]
}

type Props = OwnProps;

const DeleteCategoryProduct: FunctionComponent<Props> = ({open, setOpen, headers}) => {
    const selectedCategoryProduct = useSelector((store: IGeneralStore) => store.categoryProduct.selectedCategoryProduct)
    const loading = useSelector((store: IGeneralStore) => store.categoryProduct.loading)
    const dispatch = useDispatch()
    const handleCancel = () => {
        dispatch({type: EnumCategoryProductRedux.Set, payload: null})
        setOpen(false)
    }
    const handleConfirm = () => {
        dispatch(CategoryProductActions.delete(selectedCategoryProduct.id ?? 0))
        setOpen(false)
    }
    return (
        <Modal title="Delete" loading={loading} open={open} hasButtons={true} handleDone={handleConfirm}
               handleClose={handleCancel}>
            <Item object={selectedCategoryProduct} headers={headers}/>
        </Modal>
    );
};

export default DeleteCategoryProduct;
