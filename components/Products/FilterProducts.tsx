import { useAtom } from "jotai";
import { Filter, filterByAtom } from "../../domain/stores/FilterStore";

const FilterControls = () => {
    const btnStyle = "py-[0.555rem] px-4 rounded-full transition-all ease-out duration-150";
    const btnActive = "text-white bg-cyan-300";
    const btnSleep = "text-slate-400 bg-slate-200 hover:text-slate-600";
    const [filterBy,setFilterBy] = useAtom(filterByAtom)
    return(
        <div className="flex flex-row items-center gap-x-3">
            <span className='select-none'>Sort by:</span>
            <button onClick={() => setFilterBy(Filter.Recent)} 
                className={`${btnStyle} ${filterBy=== Filter.Recent ? btnActive : btnSleep}`}>
            <strong>Most recent</strong>
            </button>
            <button onClick={() => setFilterBy(Filter.LowestPrice)} 
                className={`${btnStyle} ${filterBy=== Filter.LowestPrice ? btnActive : btnSleep}`}>
            Lowest price
            </button>
            <button onClick={() => setFilterBy(Filter.HighestPrice)} 
                className={`${btnStyle} ${filterBy=== Filter.HighestPrice ? btnActive : btnSleep}`}>
            Highest price
            </button>
        </div>
    )
}
export default FilterControls 