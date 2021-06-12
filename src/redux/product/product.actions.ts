import {EnumProductRedux} from "./index";
import Axios from "../../utils/axios.util";
import {IProduct} from "../../models/IProduct.model";
import {generateFormDataAny} from "../../utils";
import {IImageProduct} from "../../models/IImageProduct.model";

export const ProductActions = {
    getAll: () => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumProductRedux.SetLoader, payload: true});
        try {
            const res = await Axios.get("products");
            dispatch({type: EnumProductRedux.SetList, payload: res});
        } finally {
            dispatch({type: EnumProductRedux.SetLoader, payload: false});
        }
    },
    create: (item: IProduct) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumProductRedux.SetLoader, payload: true});
        try {
            const res = await Axios.post("products", await generateFormDataAny(item));
            dispatch({type: EnumProductRedux.Add, payload: res});
            dispatch({type: EnumProductRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumProductRedux.SetLoader, payload: false});
        }
    },

    delete: (id: number) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumProductRedux.SetLoader, payload: true});
        try {
            await Axios.delete(`products/${id}`);
            dispatch({type: EnumProductRedux.Delete, payload: id});
            dispatch({type: EnumProductRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumProductRedux.SetLoader, payload: false});
        }

    },
    update: (item: IProduct) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumProductRedux.SetLoader, payload: true});
        try {
            console.log(item)
            const res = await Axios.patch(`products/${item.id}`, await generateFormDataAny(item));
            dispatch({type: EnumProductRedux.Update, payload: res});
            dispatch({type: EnumProductRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumProductRedux.SetLoader, payload: false});
        }
    },
    CreateImage: (image: IImageProduct) => async function (dispatch: Function, getState: Function) {
        dispatch({type: EnumProductRedux.SetLoader, payload: true});
        try {
            const res = await Axios.post("images-products", await generateFormDataAny(image));
            dispatch({type: EnumProductRedux.AddImage, payload: res});
        } finally {
            dispatch({type: EnumProductRedux.SetLoader, payload: false});
        }
    },
    UpdateImage: (image: IImageProduct) => async function (dispatch: Function, getState: Function) {
        dispatch({type: EnumProductRedux.SetLoader, payload: true});
        try {
            const res = await Axios.patch(`images-products/${image.id}`, await generateFormDataAny(image));
            dispatch({type: EnumProductRedux.UpdateImage, payload: res});
        } finally {
            dispatch({type: EnumProductRedux.SetLoader, payload: false});
        }
    }
}


// class CategoryProductActions implements CrudModel<IProduct> {
//     async getApp(): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//             return;
//         }
//     }
//
//     async create(m: IProduct): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//             return;
//         }
//     }
//
//     async delete(id: number): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//         };
//     }
//
//
//     async update(m: IProduct): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//         };
//     }
// }
