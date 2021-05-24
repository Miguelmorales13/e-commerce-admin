import {ProductState} from "./product.state";
import {IAction} from "../index";

export enum EnumProductRedux {
    Set = 'ProductsSet',
    SetLoader = 'ProductsSetLoader',
    SetList = 'ProductsSetList',
    Add = 'ProductsAdd',
    Update = 'ProductsUpdate',
    Delete = 'ProductsDelete',
    AddImage = 'ProductsAddImage',
    UpdateImage = 'ProductsUpdateImage',
    DeleteImage = 'ProductsDeleteImage'
}

export const ProductsReducer = function (state = ProductState, {type, payload}: IAction<EnumProductRedux, any>) {
    switch (type) {
        case EnumProductRedux.SetLoader:
            return {
                ...state,
                loading: payload
            }
        case EnumProductRedux.Set:
            return {
                ...state,
                selectedProduct: Object.assign({}, payload ? payload : {images: []})
            }
        case EnumProductRedux.SetList:
            return {
                ...state,
                products: payload
            }
        case EnumProductRedux.Add:
            return {
                ...state,
                products: [...state.products, payload]
            }
        case EnumProductRedux.Delete:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== payload.id)
            }
        case EnumProductRedux.Update:
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== payload.id), payload]
            }
        case EnumProductRedux.AddImage:
            return {
                ...state,
                selectedProduct: {...state.selectedProduct, images: [...state.selectedProduct.images ?? [], payload]}
            }
        case EnumProductRedux.UpdateImage:
            return {
                ...state,
                selectedProduct: {...state.selectedProduct, images: [...state.selectedProduct.images?.filter(image => image.id !== payload.id) ?? [], payload]}
            }
        case EnumProductRedux.DeleteImage:
            return {
                ...state,
                selectedProduct: {...state.selectedProduct, images: state.selectedProduct.images?.filter(image => image.id !== payload.id)}
            }
        default:
            return state
    }
}
