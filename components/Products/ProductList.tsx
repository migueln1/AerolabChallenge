import { useAtom } from "jotai";
import { Product} from "../../domain/stores/ProductStore";
import { userAtom } from "../../domain/stores/UserStore";
import ProductItem from "./ProductItem";

type ProductListProps = {
    productList: Product[]
}
const ProductList = ({productList}: ProductListProps) => {
    const [user] = useAtom(userAtom);
    const canBeClaimed = (product: Product) => (user.points >= product.cost)
    return(
        <div className="grid md:grid-cols-4 gap-4">
            {productList.length > 0 && productList.map(p => {
                const canClaim = canBeClaimed(p);
                return(
                    <ProductItem product={p} canClaim={canClaim}/>
                )
            })}
        </div>
    )
}
export default ProductList