import { atom } from "jotai";
import { ProductService } from "../services/ProductService";
import { filterAtom } from "./FilterStore";
import { paginationAtom } from "./PaginationStore";

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
    page?: number,
    rowsPerPage?: number
}
const pagInitialValues = { page:1, rowsPerPage:16 }
enum Filter {
    Recent,
    LowestPrice,
    HighestPrice
}
// const paginationAtom = atom(pagInitialValues, (get, set, payload: ProductPagination) => {
//     const current = get(paginationAtom);
//     const newe= {...current, ...payload};
//     set(paginationAtom, newe)
// })
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
        const { rowsPerPage } = get(paginationAtom);
        set(productPagedAtom, [..._filtered].slice(0, rowsPerPage!))
        // set(productPagedAtom, [..._filtered].slice((page!-1) * rowsPerPage!, page! * rowsPerPage!))
        set(filterAtom, payload)
        set(paginationAtom, { page: 1 })
})

const productsSortedAtom = atom([], (get,set,payload) => {
    set(productsSortedAtom, payload)
})

const productPaginationAtom = atom(null, (get, set, payload: ProductPagination) => {
    const _products: Product[] = [...get(productsSortedAtom)];
    const pag = get(paginationAtom);
    set(productPagedAtom, [..._products].slice((payload.page!-1) * pag.rowsPerPage!, payload.page! * pag.rowsPerPage!))
    set(paginationAtom, payload)
})
const productPagedAtom = atom([], (get, set, payload) => {
    set(productPagedAtom, payload)
})

export { productsAtom, currentFilterAtom, productsSortedAtom, productPagedAtom, productPaginationAtom }
