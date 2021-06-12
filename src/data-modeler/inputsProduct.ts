import {EnumInput, IInput} from "../components/forms/FormFlex";
import {IButtonTable} from "../models/IButtonTable";
import {IHeaderTable} from "../models/IHeaderTable";
import {EnumColumnTable} from "./index";
import {IProduct} from "../models/IProduct.model";
import {ICategoryProduct} from "../models/ICategoryProduct.model";


export const inputsProduct = (options: ICategoryProduct[], classes: any, onClickReset: Function): IInput<any, ICategoryProduct>[] => [
    {
        name: 'name',
        label: 'Name',
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
        name: 'price',
        label: 'Price',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 4, md: 4, p: 0.5},
        configInput: {type: "number"}
    }, {
        name: 'priceDiscount',
        label: 'Price in discount',
        type: EnumInput.TextField,
        configField: {xs: 12, sm: 4, md: 4, p: 0.5},
        configInput: {type: "number"}
    }, {
        name: 'isInDiscount',
        label: 'Is in discount',
        type: EnumInput.Switch,
        configField: {xs: 12, sm: 4, md: 4, p: 0.5, className: classes},
        configInput: {}
    }, {
        name: 'brand',
        label: 'Brand',
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
        name: 'mainImage',
        label: 'Image',
        type: EnumInput.DropInput,
        configField: {xs: 12, p: 0.5},
        configInput: {}
    }, {
        name: 'description',
        label: 'Description',
        type: EnumInput.TextField,
        configField: {xs: 12, p: 0.5},
        configInput: {}
    },
    {
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
        label: 'Save product',
        type: EnumInput.Button,
        configField: {xs: 6, p: 0.5},
        configInput: {
            type: 'submit',
            color: 'primary'
        }
    },
]
export const inputsImageProduct = (handleClose: Function, onClickReset: Function): IInput[] => [
    {
        name: 'title',
        label: "Title",
        type: EnumInput.TextField,
        configField: {xs: 12, p: 0.5},
        configInput: {}
    }, {
        name: 'file',
        label: 'Image',
        type: EnumInput.DropInput,
        configField: {xs: 12, p: 0.5},
        configInput: {}
    },
    {
        name: 'button',
        label: 'Close',
        type: EnumInput.Button,
        configField: {xs: 6, md: 4, p: 0.5},
        configInput: {
            type: 'reset',
            onClick: handleClose,
            color: 'secondary'
        }
    },
    {
        name: 'button',
        label: 'Reset',
        type: EnumInput.Button,
        configField: {xs: 6, md: 4, p: 0.5},
        configInput: {
            type: 'reset',
            onClick: onClickReset,
            color: 'secondary'
        }
    }, {
        name: 'button',
        label: "Save image",
        type: EnumInput.Button,
        configField: {xs: 12, md: 4, p: 0.5},
        configInput: {
            type: 'submit',
            color: 'primary'
        }
    },
]

export const filtersProduct: Array<keyof IProduct> = ["name", 'id', 'active', 'brand', 'price', 'priceDiscount']

export const headersProduct = (buttons: IButtonTable[]): IHeaderTable[] => [
    {align: "center", size: 1, type: EnumColumnTable.Normal, field: 'id', headerName: 'Id'},
    {align: "center", size: 3, type: EnumColumnTable.Normal, field: 'name', headerName: 'Name'},
    {align: "center", size: 2, type: EnumColumnTable.Normal, field: 'price', headerName: 'Price'},
    {align: "center", size: 2, type: EnumColumnTable.Handler, field: (row: ICategoryProduct) => `${row.category?.name}`, headerName: 'Category'},
    {align: "center", size: 2, type: EnumColumnTable.Boolean, field: 'active', headerName: 'Status'},
    {align: "center", size: 2, type: EnumColumnTable.Buttons, field: buttons, headerName: 'Options'},
]


