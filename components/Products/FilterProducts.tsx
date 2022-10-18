import { useAtom } from "jotai";
import { Filter, filterAtom } from "../../domain/stores/FilterStore";
import { currentFilterAtom } from "../../domain/stores/ProductStore";

const FilterControls = () => {
    const btnStyle = "py-[0.555rem] px-4 rounded-full border border-white shadow transition-all ease-out duration-150";
    const btnActive = "text-white bg-cyan-300 font-bold";
    const btnSleep = "text-slate-500 bg-slate-50 font-medium hover:text-slate-800 hover:border-slate-200";
    const [currentFilter] = useAtom(filterAtom)
    const [, setFilterBy] = useAtom(currentFilterAtom)
    return(
        <div className="flex flex-row items-center gap-x-3">
            <span className="select-none text-slate-700">Sort by</span>
            <span className="after:border border-slate-200 rotate-12"></span>
            <button onClick={() => setFilterBy(Filter.Recent)} 
                className={`${btnStyle} ${currentFilter=== Filter.Recent ? btnActive : btnSleep}`}>
                Most recent
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