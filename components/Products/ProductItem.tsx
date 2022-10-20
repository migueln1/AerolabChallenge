import { Product } from "../../domain/stores/ProductStore"
import Image from "next/image";

type ProductProps = {
    product: Product,
    canClaim: boolean
}

type CardProps = {
    canClaim:boolean,
    cost: number
}
const ProductItem = ({product, canClaim}: ProductProps) => {
    return(
        <div className={`relative`}>
            <section 
                className={`group grid grid-rows-[36px_200px_auto] grid-cols-1
                bg-white outline outline-[6px]
                outline-transparent shadow-lg shadow-cyan-100/10 rounded-xl 
                px-5 md:px-7 py-2 md:py-4 font-normal 
                transition-all duration-200 ease-out
                ${canClaim ? ' hover:shadow-cyan-500/40 cursor-pointer hover:outline-white':''}
                `}>
                <CardInfo canClaim={canClaim} cost={product.cost}/>
                <div className="justify-center content-center relative">
                    <Image
                        alt={`${product.name} image.`}
                        className={`max-w-min ${!canClaim ? 'grayscale':`group-hover:scale-105 transition-all 
                        duration-200 ease-out`}`} src={product.img.url} layout="fill"
                        objectFit="contain"
                        objectPosition="50% 50%"/>
                </div>
                <footer className="grid grid-rows-2 grid-cols-2 grid-flow-dense pt-6">
                    <span className="text-sm  text-slate-400">{product.category}</span>
                    <div className="flex justify-end place-self-end gap-1">
                        <span className="text-sm leading-3 text-slate-600">{product.cost}</span>
                        <Image className={`${!canClaim ? 'grayscale':''}`} src="/icons/coinN.svg" width={18} height={18} alt="coin image"/>
                    </div>
                    <div className="col-span-2">
                        <span className="text-slate-600 text-[.9rem] font-semibold">{product.name}</span>
                    </div>
                </footer>
            </section>
            <section className={`flex items-center justify-center absolute inset-0 
                w-full h-full bg-cyan-400 z-10
                rounded-lg opacity-90 mix-blend-hard-ligth invisible  
            `}>
                <h3 className="text-white font-bold text-xl">{product.cost}</h3>
            </section>
        </div>
    )
}

const CardInfo = ({canClaim, cost}: CardProps) => (
    <header className="flex justify-end h-8 items-center">
        { canClaim ? 
        (
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline"
                className="fill-cyan-500 invisible group-hover:visible" 
                viewBox="0 0 24 24" width="24" height="24">
                    <circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/>
                    <path d="M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z"/>
                    <path d="M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z"/>
            </svg>) :
        (
            <div className="flex items-center gap-1 transition-all ease-out font-semibold group-hover:scale-110 bg-cyan-50 rounded-md p-2">
                <span className="text-xs leading-3 text-slate-500">{`Needed points: ${cost}`}</span>
                <Image src="/icons/coinN.svg" width={18} height={18} alt="coin image"/>
            </div>
        )}
    </header>
)

export default ProductItem