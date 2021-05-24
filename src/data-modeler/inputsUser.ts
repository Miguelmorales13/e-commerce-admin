import {EnumInput, IInput} from "../components/forms/FormFlex";
import {IButtonTable} from "../models/IButtonTable";
import {IHeaderTable} from "../models/IHeaderTable";
import {EnumColumnTable} from "./index";
import {IUser} from "../models/IUser.model";

export const inputsUser = (classes: any, onClickReset: Function): IInput<any>[] => [
    {
        name: 'name',
        label: 'Name',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 6, p: 0.5},
        configInput: {}
    }, {
        name: 'lastName',
        label: 'Last name',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 6, p: 0.5},
        configInput: {}
    }, {
        name: 'secondLastName',
        label: 'Second last name',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 6, p: 0.5},
        configInput: {}
    }, {
        name: 'active',
        label: 'Status',
        type: EnumInput.Switch,
        configField: {xs: 12, sm: 6, p: 0.5, className: classes},
        configInput: {}
    }, {
        name: 'email',
        label: 'Email',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 6, p: 0.5},
        configInput: {}
    }, {
        name: 'password',
        label: 'Password',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 6, p: 0.5},
        configInput: {
            type: 'password'
        }
    }, {
        name: 'button',
        label: 'Cancel',
        type: EnumInput.Button,
        configField: {xs: 6, p: 0.5},
        configInput: {
            type: 'reset',
            onClick: onClickReset,
            color: 'secondary'
        }
    }, {
        name: 'button',
        label: 'Save',
        type: EnumInput.Button,
        configField: {xs: 6, p: 0.5},
        configInput: {
            type: 'submit',
            color: 'primary'
        }
    },
]

export const filtersUser: Array<keyof IUser> = ["name", 'id', 'active', 'email', 'lastName', 'secondLastName']

export const headersUser = (buttons: IButtonTable[]): IHeaderTable[] => [
    {align: "center", size: 1, type: EnumColumnTable.Normal, field: 'id', headerName: 'Id'},
    {
        align: "center",
        size: 3,
        type: EnumColumnTable.Handler,
        field: ({name, lastName, secondLastName}: IUser) => `${name} ${lastName} ${secondLastName}`,
        headerName: 'Name'
    },
    {align: "center", size: 3, type: EnumColumnTable.Normal, field: 'email', headerName: 'Email'},
    {align: "center", size: 3, type: EnumColumnTable.Boolean, field: 'active', headerName: 'Status'},
    {align: "center", size: 2, type: EnumColumnTable.Buttons, field: buttons, headerName: 'Options'},
]


