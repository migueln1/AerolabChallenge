import { atom } from "jotai";
import { ProductService } from "../services/ProductService";
import { filterAtom } from "./FilterStore";

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

type ProductPagination = {
    page: number,
    rowsPerPage: number
}
const pagInitialValues = { page:1, rowsPerPage:16 }
enum Filter {
    Recent,
    LowestPrice,
    HighestPrice
}
const paginationAtom = atom(pagInitialValues, (get, set, payload) => {
    set(paginationAtom,payload)
})
const productService = new ProductService();
const productsAtom = atom(async () => 
    await productService.getProducts()
)

const currentFilterAtom = atom((get) => get(filterAtom), async (get, set, payload) => {
    const _products:Product[] = [...get(productsAtom)];
    const _filtered: Product[] = payload === Filter.LowestPrice ? 
        _products.sort((a,b) => a.cost - b.cost) : payload === Filter.HighestPrice ?
        _products.sort((a,b) => b.cost - a.cost) : _products;
        set(productsSortedAtom, _filtered)
        set(filterAtom, payload)
})

const productsSortedAtom = atom([], (get,set,payload) => {
    set(productsSortedAtom, payload)
})

const productPaginationAtom = atom(null, (get, set, payload: ProductPagination) => {
    const _products: Product[] = [...get(productsSortedAtom)];
    const page = payload.page ?? pagInitialValues.page;
    const rowsPerPage = payload.rowsPerPage ?? pagInitialValues.rowsPerPage;
    _products.slice((page-1) * rowsPerPage, page * rowsPerPage)
    set(productPagedAtom, _products)
})
const productPagedAtom = atom((get)=>get(productsSortedAtom).slice(0, pagInitialValues.rowsPerPage), (get, set, payload) => {
    set(productPagedAtom, payload)
})

export { productsAtom, currentFilterAtom, productsSortedAtom, productPagedAtom }
