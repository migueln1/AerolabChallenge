import { Product } from "../../domain/stores/ProductStore"
import Image from "next/image";
import { userAtom } from "../../domain/stores/UserStore";
import { useAtom } from "jotai";

type ProductProps = {
    product: Product,
    canClaim: boolean
}

type CardProps = {
    cost: number
}
const ProductItem = ({product, canClaim}: ProductProps) => {
    return(
        <div className={`relative`}>
            <section 
                className={`group grid grid-rows-[36px_200px_auto] grid-cols-1
                bg-white outline outline-[6px]
                outline-transparent shadow-lg shadow-cyan-100/10 rounded-xl 
                px-3 gap-1 py-2 md:py-4 font-normal 
                transition-all duration-200 ease-out
                ${canClaim ? ' hover:shadow-cyan-500/40 hover:outline-white':''}
                `}>
                <CardInfo cost={product.cost}/>
                <div className="justify-center content-center relative">
                    <Image
                        alt={`${product.name} image.`}
                        className={`max-w-min ${!canClaim ? 'grayscale':`group-hover:scale-105 transition-all 
                        duration-200 ease-out`}`} src={product.img.url} layout="fill"
                        objectFit="contain"
                        objectPosition="50% 50%"/>
                </div>
                <footer className="grid grid-rows-2 grid-cols-2 grid-flow-dense pt-6 px-2">
                    <span className="text-sm  text-slate-400">{product.category}</span>
                    <div className="flex justify-end place-self-end gap-1">
                        <span className="text-sm leading-[17px] text-slate-600">{product.cost}</span>
                        <div className="relative w-[18px] h-[18px]">
                            <Image alt="coin icon" src="/icons/coinN.svg" layout="fill" objectFit="cover"/>
                        </div>
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

const CardInfo = ({cost}: CardProps) => {
    const [user] = useAtom(userAtom);
    return (
        <header className="flex justify-end h-8 items-center">
        { user.points >= cost ? 
        (
            <div className="rounded-md flex flex-row items-center gap-1 px-3 py-2
                bg-slate-50 border border-slate-200 hover:bg-indigo-700 hover:cursor-pointer
                text-slate-500 fill-white hover:text-white
                font-semibold transition-all ease-linear duration-100">
                <span className="text-xs">Redeem</span>
                
            </div>
            
        ) : (
            <div className="flex items-center gap-1 transition-all ease-out font-semibold group-hover:scale-110 bg-cyan-50 rounded-md p-2">
                <span className="text-xs text-slate-500">{`Necessary points: ${cost - user.points}`}</span>
                <div className="relative w-[18px] h-[18px]">
                    <Image alt="coin icon" src="/icons/coinN.svg" layout="fill" objectFit="cover"/>
                </div>
            </div>
        )}
    </header>
    )
}

export default ProductItem