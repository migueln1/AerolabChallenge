import { useState } from "react"
import FilterControls from "./FilterProducts";
import ProductList from "./ProductList";

const Products = () => {
    
    const paginationInitialData = {
        showing: 16,
        page: 1
    }

    const [pagination, setPagination] = 
        useState<typeof paginationInitialData>(paginationInitialData);
    
    return(
        <div className="md:container px-2">
            {/* TopControls */}
            <div className="py-5 flex items-center justify-between md:flex-nowrap gap-3 text-slate-500">
                {/* ProductPagination */}
                <span>{pagination.showing} of 32 products</span>
                <FilterControls/>
            </div>
            {/* ProductList */}
            <ProductList/>
        </div>
    )
}
export default Products