import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product, ProductService } from "../../domain/services/ProductService";
import { Filter, filterByAtom } from "../../domain/stores/FilterStore";

type ProductListProps = {
    productList: Product[]
}
const ProductList = () => {
    const [filterBy,] = useAtom(filterByAtom);
    const [products, setProducts] = useState<Product[]>([]);
    const [productList, setProductList] = useState<Product[]>([]);
    const productService = new ProductService();

    useEffect(()=>{
        const loadProducts = async () => {
            const rawProducts = await productService.getProducts();
            setProducts(rawProducts)
            setProductList([...rawProducts].slice(0, 16))
        }
        loadProducts()
    },[])
    useEffect(()=>{
        switch (filterBy) {
            case Filter.LowestPrice:
                setProductList([...products].sort((a,b) => a.cost - b.cost).slice(0,16))
                break;
            case Filter.HighestPrice:
                setProductList([...products].sort((a,b) => b.cost - a.cost).slice(0,16))
                break;
            case Filter.Recent:
                setProductList([...products].slice(0,16))
                break;
        }
    }, [filterBy])
    return(<ProductListView productList={productList}/>)
}
const ProductListView = ({productList}:ProductListProps) => {
    return(
        <div className="grid grid-cols-4 gap-4">
            {productList.length > 0 && productList.map(p => (
                <div key={`product-${p._id}`} className="flex flex-col border 
                border-slate-100 shadow-xl rounded-lg p-3 md:p-5">
                    <Image className="al" src={p.img.url} width={252} height={182}></Image>
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