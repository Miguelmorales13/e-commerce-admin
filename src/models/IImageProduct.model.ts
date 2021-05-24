import {IProduct} from "./IProduct.model";

export interface IImageProduct {
    id?: number
    file?: string;
    title?: string;
    size?: string;
    dimensions?: string;
    productId?: number;
    product?: IProduct;
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
