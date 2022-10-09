import { atom } from "jotai";

enum Filter {
    Recent,
    LowestPrice,
    HighestPrice
}

const filterByAtom = atom(Filter.Recent)

export { filterByAtom, Filter }