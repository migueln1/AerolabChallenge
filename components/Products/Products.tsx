import { Suspense } from "react";
import PaginationControls from "../Common/PaginationControls";
import FilterControls from "./FilterProducts";
import Preloader from "./Preloader";
import ProductList from "./ProductList";

const Products = () => {
    
    return(
        <div className="md:container px-2">
            <div className="py-5 flex flex-col md:flex-row items-center justify-between md:flex-nowrap gap-3 text-slate-500">
                <PaginationControls/>
                <FilterControls/>
            </div>
            <Suspense fallback="Loading products">
                <Preloader/>
                <ProductList/>
            </Suspense>
        </div>
    )
}
export default Products