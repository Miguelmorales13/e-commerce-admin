import React, {FunctionComponent} from 'react';
import Modal from "../../Modal";
import FormFlex from "../../forms/FormFlex";
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import {makeStyles} from "@material-ui/core/styles";
import {ValidationsForm} from "../../../utils";
import {object} from "yup";
import {IUser} from "../../../models/IUser.model";
import {EnumUserRedux, UserActions} from "../../../redux/user";
import {inputsUser} from "../../../data-modeler";

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
    lastName: ValidationsForm.reqWithSizeMinMax(3, 30),
    email: ValidationsForm.reqEmail(),
    password: ValidationsForm.reqWithSizeMin(8),
    secondLastName: ValidationsForm.reqWithSizeMinMax(3, 30)
})

const FormUser: FunctionComponent<Props> = ({open, setOpen}) => {
    const dispatch = useDispatch()
    const selectedUser = useSelector((store: IGeneralStore) => store.user.selectedUser)
    const loading = useSelector((store: IGeneralStore) => store.user.loading)
    const classes = useStyles()


    const handleSubmit = (values: IUser) => {
        const {id} = selectedUser
        if (id) {
            dispatch(UserActions.update({...values, id}))
        } else {
            dispatch(UserActions.create(values))
        }
        setOpen(false)
    }
    const handleCancel = () => {
        setOpen(false)
        dispatch({type: EnumUserRedux.Set, payload: null})
    }

    const isUpdate = selectedUser.id
    const initialValues: IUser = selectedUser.id ? Object.assign({}, selectedUser) : {
        name: '',
        active: true,
        email: '',
        lastName: '',
        secondLastName: ''
    }
    return (
        <Modal open={open} hasButtons={false} loading={loading} title={isUpdate ? 'Update' : 'Add'}>
            <FormFlex inputs={inputsUser(classes.switch, handleCancel)} schema={schema} handleSubmit={handleSubmit} initialValues={initialValues}/>
        </Modal>
    );
};

export default FormUser;

