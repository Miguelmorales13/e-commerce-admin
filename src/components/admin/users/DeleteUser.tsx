import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import Modal from "../../Modal";
import Item, {HeaderItem} from "../../Item";
import {EnumUserRedux, UserActions} from "../../../redux/user";

interface OwnProps {
    open: boolean
    setOpen: Function
    headers: HeaderItem[]
}

type Props = OwnProps;

const DeleteUser: FunctionComponent<Props> = ({open, setOpen, headers}) => {
    const selectedUser = useSelector((store: IGeneralStore) => store.user.selectedUser)
    const loading = useSelector((store: IGeneralStore) => store.user.loading)
    const dispatch = useDispatch()
    const handleCancel = () => {
        dispatch({type: EnumUserRedux.Set, payload: null})
        setOpen(false)
    }
    const handleConfirm = () => {
        dispatch(UserActions.delete(selectedUser.id ?? 0))
        setOpen(false)
    }
    return (
        <Modal title={`titles.users.delete`} loading={loading} open={open} hasButtons={true} handleDone={handleConfirm}
               handleClose={handleCancel}>
            <Item object={selectedUser} headers={headers}/>
        </Modal>
    );
};

export default DeleteUser;
