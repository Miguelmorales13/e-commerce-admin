import {ICategoryProduct} from "./ICategoryProduct.model";
import {IImageProduct} from "./IImageProduct.model";

export interface IProduct {
    id?: number
    name?: string;
    active?: boolean;
    mainImage?: any;
    price?: number;
    priceDiscount?: number;
    description?: string;
    brand?: string;
    isInDiscount?: boolean;
    categoryId?: number;
    hasMultiplesImages?: boolean;
    images?: IImageProduct[];
    category?: ICategoryProduct;
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}

