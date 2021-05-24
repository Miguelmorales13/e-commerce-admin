import React, {FunctionComponent} from 'react';
import Modal from "../../Modal";
import FormFlex from "../../forms/FormFlex";
import {useDispatch, useSelector} from "react-redux";
import {IGeneralStore} from "../../../redux";
import {makeStyles} from "@material-ui/core/styles";
import {ValidationsForm} from "../../../utils";
import {object} from "yup";
import {IClient} from "../../../models/IClient.model";
import {ClientActions, EnumClientRedux} from "../../../redux/client";
import {inputsClient} from "../../../data-modeler";

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

const FormClient: FunctionComponent<Props> = ({open, setOpen}) => {
    const dispatch = useDispatch()
    const selectedClient = useSelector((store: IGeneralStore) => store.client.selectedClient)
    const loading = useSelector((store: IGeneralStore) => store.client.loading)
    const classes = useStyles()


    const handleSubmit = (values: IClient) => {
        const {id} = selectedClient
        if (id) {
            dispatch(ClientActions.update({...values, id}))
        } else {
            dispatch(ClientActions.create(values))
        }
        setOpen(false)
    }
    const handleCancel = () => {
        setOpen(false)
        dispatch({type: EnumClientRedux.Set, payload: null})
    }

    const isUpdate = selectedClient.id
    const initialValues: IClient = selectedClient.id ? Object.assign({}, selectedClient) : {
        name: '',
        active: true,
        email: '',
        lastName: '',
        secondLastName: ''
    }
    return (
        <Modal open={open} hasButtons={false} loading={loading} title={isUpdate ? 'Update' : 'Add'}>
            <FormFlex inputs={inputsClient(classes.switch, handleCancel)} schema={schema} handleSubmit={handleSubmit} initialValues={initialValues}/>
        </Modal>
    );
};

export default FormClient;

