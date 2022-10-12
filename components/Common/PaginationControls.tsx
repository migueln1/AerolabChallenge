import { useAtom } from "jotai";
import { paginationAtom } from "../../domain/stores/PaginationStore";

const PaginationControls = () => {
    const [pagination, setPagination] = useAtom(paginationAtom);
    
    return(
        <div className="flex flex-row items-center gap-3">
            <svg className="w-[1.334rem] h-[1.334rem] rotate-180 fill-slate-600 hover:fill-slate-900 cursor-pointer" id="next_btn" data-name="next_btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Right, Next, Arrow</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/><polygon points="8.48 7.08 13.4 12 8.48 16.92 9.89 18.33 16.23 12 9.89 5.67 8.48 7.08"/></svg>
            <span>{pagination.rowsPerPage} of 32 products</span>
            <svg className="w-[1.334rem] h-[1.334rem] fill-slate-600 hover:fill-slate-900 cursor-pointer" id="next_btn" data-name="next_btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Right, Next, Arrow</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/><polygon points="8.48 7.08 13.4 12 8.48 16.92 9.89 18.33 16.23 12 9.89 5.67 8.48 7.08"/></svg>
        </div>
        
    )
}
export default PaginationControls;