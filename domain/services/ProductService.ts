import { Product } from "../stores/ProductStore";
import { BaseService } from "./BaseService";

export class ProductService extends BaseService<Product>{
    async getProducts(headers?: [string, string][]): Promise<Product[]> {
        return super.getAll("/products", headers)
    }
}