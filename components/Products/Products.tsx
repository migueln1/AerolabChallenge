import { useAtom } from "jotai";
import { useEffect } from "react";
import { paginationAtom } from "../../domain/stores/PaginationStore";
import { productPagedAtom, productsAtom, productsSortedAtom } from "../../domain/stores/ProductStore";
import PaginationControls from "../Common/PaginationControls";
import FilterControls from "./FilterProducts";
import ProductList from "./ProductList";

const Products = () => {
    const [pagination] = useAtom(paginationAtom);
    const [products] = useAtom(productsAtom);
    
    const [, setProductList] = useAtom(productsSortedAtom);
    const [pagedProducts, setPagedProducts] = useAtom(productPagedAtom);

    useEffect(()=>{
        setProductList([...products])
        setPagedProducts([...products].slice(0, pagination.rowsPerPage||16))
    },[products])
    
    return(
        <div className="md:container px-2">
            <div className="py-5 flex flex-col md:flex-row items-center justify-between md:flex-nowrap gap-3 text-slate-500">
                <FilterControls/>
                <PaginationControls itemsLength={products.length}/>
            </div>
                <ProductList productList={pagedProducts}/>
            <div className="flex py-8 justify-end">
                <PaginationControls itemsLength={products.length}/>
            </div>
        </div>
    )
}
export default Products