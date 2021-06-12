import {EnumInput, IInput} from "../components/forms/FormFlex";

export const inputsSignIn: IInput<any>[] = [
    {
        name: 'user',
        label: 'User',
        type: EnumInput.TextField,
        configField: {xs: 12},
        configInput: {}
    }, {
        name: 'password',
        label: 'Password',
        type: EnumInput.TextField,
        configField: {xs: 12},
        configInput: {
            type: 'password'
        }
    }, {
        name: 'button',
        label: 'Login',
        type: EnumInput.Button,
        configField: {xs: 12, p: 0.5},
        configInput: {
            type: 'submit',
            color: 'primary'
        }
    }
]
