import {EnumCategoryProductRedux} from "./index";
import Axios from "../../utils/axios.util";
import {ICategoryProduct} from "../../models/ICategoryProduct.model";

export const CategoryProductActions = {
    getAll: () => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumCategoryProductRedux.SetLoader, payload: true});
        try {
            const res = await Axios.get("categories-products");
            dispatch({type: EnumCategoryProductRedux.SetList, payload: res});
        } finally {
            dispatch({type: EnumCategoryProductRedux.SetLoader, payload: false});
        }
    },
    create: (item: ICategoryProduct) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumCategoryProductRedux.SetLoader, payload: true});
        try {
            const res = await Axios.post("categories-products", item);
            dispatch({type: EnumCategoryProductRedux.Add, payload: res});
            dispatch({type: EnumCategoryProductRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumCategoryProductRedux.SetLoader, payload: false});
        }
    },

    delete: (id: number) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumCategoryProductRedux.SetLoader, payload: true});
        try {
            await Axios.delete(`categories-products/${id}`);
            dispatch({type: EnumCategoryProductRedux.Delete, payload: id});
            dispatch({type: EnumCategoryProductRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumCategoryProductRedux.SetLoader, payload: false});
        }

    },
    update: (item: ICategoryProduct) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumCategoryProductRedux.SetLoader, payload: true});
        try {
            const res = await Axios.patch(`categories-products/${item.id}`, item);
            dispatch({type: EnumCategoryProductRedux.Update, payload: res});
            dispatch({type: EnumCategoryProductRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumCategoryProductRedux.SetLoader, payload: false});
        }
    }
}


// class CategoryProductActions implements CrudModel<ICategoryProduct> {
//     async getApp(): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//             return;
//         }
//     }
//
//     async create(m: ICategoryProduct): Promise<(dispatch: Function, getState: Function) => void> {
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
//     async update(m: ICategoryProduct): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//         };
//     }
// }
