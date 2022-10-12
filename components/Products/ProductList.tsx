import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect } from "react";
// import { useEffect } from "react";
// import { useEffect } from "react";
// import { ProductService } from "../../domain/services/ProductService";
// import { pageItemsAtom, paginationAtom } from "../../domain/stores/PaginationStore";
import { Product, productPagedAtom, productsAtom, productsSortedAtom } from "../../domain/stores/ProductStore";

type ProductListProps = {
    productList: Product[]
}
const ProductList = () => {
    const [products] = useAtom(productsAtom)
    const [productList, setProductList] = useAtom(productsSortedAtom);
    const [pagedProducts,] = useAtom(productPagedAtom);

    useEffect(()=>{
        setProductList(products)
    },[products])

    return(<ProductListView productList={pagedProducts}/>)
}
const ProductListView = ({productList}:ProductListProps) => {
    return(
        <div className="grid md:grid-cols-4 gap-4">
            {productList.length > 0 && productList.map(p => (
                <div key={`product-${p._id}`} className="flex flex-col border 
                border-slate-100 shadow-xl rounded-lg p-3 md:p-5">
                    <Image className="al" src={p.img.url} width={252} height={182} quality={100}></Image>
                    <div className="flex flex-col">
                        <span>{p.category}</span>
                        <span>{p.name}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList