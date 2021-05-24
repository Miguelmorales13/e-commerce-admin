import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import Modal from "../../Modal";
import Item, {HeaderItem} from "../../Item";
import {EnumClientRedux, ClientActions} from "../../../redux/client";

interface OwnProps {
    open: boolean
    setOpen: Function
    headers: HeaderItem[]
}

type Props = OwnProps;

const DeleteClient: FunctionComponent<Props> = ({open, setOpen, headers}) => {
    const selectedClient = useSelector((store: IGeneralStore) => store.client.selectedClient)
    const loading = useSelector((store: IGeneralStore) => store.client.loading)
    const dispatch = useDispatch()
    const handleCancel = () => {
        dispatch({type: EnumClientRedux.Set, payload: null})
        setOpen(false)
    }
    const handleConfirm = () => {
        dispatch(ClientActions.delete(selectedClient.id ?? 0))
        setOpen(false)
    }
    return (
        <Modal title="Delete" loading={loading} open={open} hasButtons={true} handleDone={handleConfirm}
               handleClose={handleCancel}>
            <Item object={selectedClient} headers={headers}/>
        </Modal>
    );
};

export default DeleteClient;
