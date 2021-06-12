import {EnumClientRedux} from "./index";
import Axios from "../../utils/axios.util";
import {IClient} from "../../models/IClient.model";

export const ClientActions = {
    getAll: () => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumClientRedux.SetLoader, payload: true});
        try {
            const res = await Axios.get("clients");
            dispatch({type: EnumClientRedux.SetList, payload: res});
        } finally {
            dispatch({type: EnumClientRedux.SetLoader, payload: false});
        }
    },
    create: (item: IClient) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumClientRedux.SetLoader, payload: true});
        try {
            const res = await Axios.post("clients", item);
            dispatch({type: EnumClientRedux.Add, payload: res});
            dispatch({type: EnumClientRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumClientRedux.SetLoader, payload: false});
        }
    },

    delete: (id: number) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumClientRedux.SetLoader, payload: true});
        try {
            await Axios.delete(`clients/${id}`);
            dispatch({type: EnumClientRedux.Delete, payload: id});
            dispatch({type: EnumClientRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumClientRedux.SetLoader, payload: false});
        }

    },
    update: (item: IClient) => async (dispatch: Function, getState: Function) => {
        dispatch({type: EnumClientRedux.SetLoader, payload: true});
        try {
            const res = await Axios.patch(`clients/${item.id}`, item);
            dispatch({type: EnumClientRedux.Update, payload: res});
            dispatch({type: EnumClientRedux.Set, payload: null});
        } finally {
            dispatch({type: EnumClientRedux.SetLoader, payload: false});
        }
    }
}


// class CategoryProductActions implements CrudModel<IClient> {
//     async getApp(): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//             return;
//         }
//     }
//
//     async create(m: IClient): Promise<(dispatch: Function, getState: Function) => void> {
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
//     async update(m: IClient): Promise<(dispatch: Function, getState: Function) => void> {
//         return async function (dispatch: Function, p2: Function) {
//         };
//     }
// }
