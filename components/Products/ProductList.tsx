import { useAtom } from "jotai";
import Image from "next/image";
import { Product} from "../../domain/stores/ProductStore";
import { userAtom } from "../../domain/stores/UserStore";

type ProductListProps = {
    productList: Product[]
}
const ProductList = ({productList}: ProductListProps) => {
    const [user] = useAtom(userAtom);
    const canBeClaimed = (product: Product) => (user.points >= product.cost)
    return(
        <div className="grid md:grid-cols-4 gap-4">
            {productList.length > 0 && productList.map(p => (
                <div key={`product-${p._id}`} className="group flex flex-col bg-white outline outline-4
                outline-transparent hover:outline-white shadow-lg shadow-cyan-100/10 hover:shadow-cyan-500/30 
                rounded-lg p-5 md:p-7 divide-y gap-4 font-normal cursor-pointer 
                transition-all duration-100 ease-out">
                    <Image className={`${!canBeClaimed(p) ? 'grayscale':'group-hover:scale-105 transition-all duration-200 ease-out'}`} src={p.img.url} width={252} height={182} quality={100}></Image>
                    {/* <div className="flex flex-col lg:flex-row  justify-between pt-4"> */}
                    <div className="grid grid-rows-2 grid-cols-2 grid-flow-dense pt-6">
                        <span className="text-sm  text-slate-400">{p.category}</span>
                        <div className="flex justify-end place-self-end gap-1">
                            <span className="text-sm leading-3 text-slate-600">{p.cost}</span>
                            <Image className={`${!canBeClaimed(p) ? 'grayscale':''}`} src="/icons/coinN.svg" width={18} height={18} alt="coin image"/>
                        </div>
                        <div className="col-span-2">
                            <span className="text-slate-600 text-[.9rem] font-semibold">{p.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductList