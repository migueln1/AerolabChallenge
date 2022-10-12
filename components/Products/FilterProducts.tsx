import { useAtom } from "jotai";
import { Filter } from "../../domain/stores/FilterStore";
import { currentFilterAtom } from "../../domain/stores/ProductStore";

const FilterControls = () => {
    const btnStyle = "py-[0.555rem] px-4 rounded-full transition-all ease-out duration-150";
    const btnActive = "text-white bg-cyan-300";
    const btnSleep = "text-slate-400 bg-slate-200 hover:text-slate-600";
    const [currentFilter,setFilterBy] = useAtom(currentFilterAtom)
    return(
        <div className="flex flex-row items-center gap-x-3">
            <span className='select-none'>Sort by:</span>
            <button onClick={() => setFilterBy(Filter.Recent)} 
                className={`${btnStyle} ${currentFilter=== Filter.Recent ? btnActive : btnSleep}`}>
            <strong>Most recent</strong>
            </button>
            <button onClick={() => setFilterBy(Filter.LowestPrice)} 
                className={`${btnStyle} ${currentFilter=== Filter.LowestPrice ? btnActive : btnSleep}`}>
            Lowest price
            </button>
            <button onClick={() => setFilterBy(Filter.HighestPrice)} 
                className={`${btnStyle} ${currentFilter=== Filter.HighestPrice ? btnActive : btnSleep}`}>
            Highest price
            </button>
        </div>
    )
}
export default FilterControls 