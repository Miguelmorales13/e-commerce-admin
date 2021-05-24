import {EnumInput, IInput} from "../components/forms/FormFlex";
import {IButtonTable} from "../models/IButtonTable";
import {IHeaderTable} from "../models/IHeaderTable";
import {EnumColumnTable} from "./index";
import {ICategoryProduct} from "../models/ICategoryProduct.model";

export const inputsCategoryProduct = (options: ICategoryProduct[], classes: any, onClickReset: Function): IInput<any, ICategoryProduct>[] => [
    {
        name: 'name',
        label: 'Name',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 6, p: 0.5},
        configInput: {}
    }, {
        name: 'categoryId',
        label: 'Category',
        type: EnumInput.Select,
        options,
        configField: {xs: 12, sm: 6, p: 0.5},
        configInput: {}
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

export const filtersCategoryProduct: Array<keyof ICategoryProduct> = ["name", 'id']

export const headersCategoryProduct = (buttons: IButtonTable[]): IHeaderTable[] => [
    {align: "center", size: 1, type: EnumColumnTable.Normal, field: 'id', headerName: 'Id'},
    {align: "center", size: 6, type: EnumColumnTable.Normal, field: 'name', headerName: 'Name'},
    {align: "center", size: 3, type: EnumColumnTable.Normal, field: 'nivel', headerName: 'Nivel'},
    {align: "center", size: 2, type: EnumColumnTable.Buttons, field: buttons, headerName: 'Options'},
]


