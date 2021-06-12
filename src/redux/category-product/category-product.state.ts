import {ICategoryProduct} from "../../models/ICategoryProduct.model";

export interface ICategoryProductsState {
    selectedCategoryProduct: ICategoryProduct
    categoryProducts: ICategoryProduct[]
    loading: boolean
}

export const CategoryProductState: ICategoryProductsState = {
    selectedCategoryProduct: {},
    categoryProducts: [],
    loading: false
}

