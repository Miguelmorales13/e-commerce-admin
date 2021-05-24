import {IProduct} from "../../models/IProduct.model";

export interface IProductsState {
    selectedProduct: IProduct
    products: IProduct[]
    loading: boolean
}

export const ProductState: IProductsState = {
    selectedProduct: {},
    products: [],
    loading: false
}

