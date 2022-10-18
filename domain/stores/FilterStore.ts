import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { BehaviorSubject } from "rxjs";

import { Product, productsAtom, productsSortedAtom } from "./ProductStore";

enum Filter {
    Recent,
    LowestPrice,
    HighestPrice
}
const filterAtom = atom(Filter.Recent, (get, set, payload) => {
    set(filterAtom, payload)
})
export { Filter, filterAtom }