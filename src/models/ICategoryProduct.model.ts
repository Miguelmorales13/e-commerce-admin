export interface ICategoryProduct {
    id?: number
    name?: string;
    nivel?: number;
    categoryId?: number;
    category?: ICategoryProduct;
    createdAt?: string
    updatedAt?: string
    deletedAt?: string
}
