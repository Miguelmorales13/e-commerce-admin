import {CategoryProductState} from "./category-product.state";
import {IAction} from "../index";

export enum EnumCategoryProductRedux {
    Set = 'CategoryProductsSet',
    SetLoader = 'CategoryProductsSetLoader',
    SetList = 'CategoryProductsSetList',
    Add = 'CategoryProductsAdd',
    Update = 'CategoryProductsUpdate',
    Delete = 'CategoryProductsDelete'
}

export const CategoryProductsReducer = function (state = CategoryProductState, {type, payload}: IAction<EnumCategoryProductRedux, any>) {
    switch (type) {
        case EnumCategoryProductRedux.SetLoader:
            return {
                ...state,
                loading: payload
            }
        case EnumCategoryProductRedux.Set:
            return {
                ...state,
                selectedCategoryProduct: Object.assign({}, payload ? payload : {})
            }
        case EnumCategoryProductRedux.SetList:
            return {
                ...state,
                categoryProducts: payload
            }
        case EnumCategoryProductRedux.Add:
            return {
                ...state,
                categoryProducts: [...state.categoryProducts, payload]
            }
        case EnumCategoryProductRedux.Delete:
            return {
                ...state,
                categoryProducts: state.categoryProducts.filter((categoryProduct) => categoryProduct.id !== payload.id)
            }
        case EnumCategoryProductRedux.Update:
            return {
                ...state,
                categoryProducts: [...state.categoryProducts.filter(categoryProduct => categoryProduct.id !== payload.id), payload]
            }
        default:
            return state
    }
}
