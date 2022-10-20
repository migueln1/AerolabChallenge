import { atom } from "jotai";

enum Filter {
    Recent,
    LowestPrice,
    HighestPrice
}
const filterAtom = atom(Filter.Recent, (get, set, payload) => {
    set(filterAtom, payload)
})
export { Filter, filterAtom }