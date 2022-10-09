import { BaseService } from "./BaseService";

export type Product = {
    _id: string,
    name: string,
    cost: number,
    category: string,
    img: ProductImage
}
type ProductImage = {
    url: string,
    hUrl: string
}


export class ProductService extends BaseService<Product>{
    async getProducts(headers?: [string, string][]): Promise<Product[]> {
        return super.getAll("/products", headers)
    }
}