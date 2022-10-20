import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { paginationAtom } from "../../domain/stores/PaginationStore";
import { productPaginationAtom } from "../../domain/stores/ProductStore";
type PaginationProps = {
    itemsLength: number,
    mirror?: boolean
}
const PaginationControls = ({ itemsLength }: PaginationProps) => {
    const [pagination] = useAtom(paginationAtom)
    const [,setProductPage] = useAtom(productPaginationAtom)
    const [pages] = useState(Math.ceil(itemsLength / pagination.rowsPerPage!));
    const [canNext, setCanNext] = useState(pagination.page! < pages)
    const [canBack, setCanBack] = useState(pagination.page! > 1)
    useEffect(() => {
        setCanNext(pagination.page! < pages)
        setCanBack(pagination.page! > 1 )
    },[pagination, pages])
    const goNext = () => {
        if(!canNext) return
        setProductPage({page: pagination.page! + 1})
    }
    const goBack = () => {
        if(!canBack) return
        setProductPage({page: pagination.page! - 1})
    }
    const arrowStyles = `w-[1.334rem] h-[1.334rem] 
                        transition-all ease-out duration-200`;
    return(
        <div className="flex flex-row items-center gap-3">
            <svg onClick={goBack} className={`${arrowStyles} ${canBack?'fill-slate-400 hover:fill-slate-600 cursor-pointer':'fill-slate-100'} rotate-180`} id="next_btn" data-name="next_btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Right, Next, Arrow</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/><polygon points="8.48 7.08 13.4 12 8.48 16.92 9.89 18.33 16.23 12 9.89 5.67 8.48 7.08"/></svg>
            <span>{((pagination.page!-1) * pagination.rowsPerPage!) + 1}-{pagination.page! * pagination.rowsPerPage!} of {itemsLength} products</span>
            <svg onClick={goNext} className={`${arrowStyles} ${canNext?'fill-slate-400 hover:fill-slate-600 cursor-pointer':'fill-slate-100'}`} id="next_btn" data-name="next_btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Right, Next, Arrow</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/><polygon points="8.48 7.08 13.4 12 8.48 16.92 9.89 18.33 16.23 12 9.89 5.67 8.48 7.08"/></svg>
        </div>
        
    )
}
export default PaginationControls;