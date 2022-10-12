import { atom } from "jotai";
import { atomWithObservable } from "jotai/utils";
import { BehaviorSubject } from "rxjs";

import { pageItemsAtom } from "./PaginationStore";
import { Product, productsAtom, productsSortedAtom } from "./ProductStore";

enum Filter {
    Recent,
    LowestPrice,
    HighestPrice
}
const filterOb = new BehaviorSubject(Filter.Recent);
const filterRx = atomWithObservable(() => filterOb)
// const filterByAtom = atom(Filter.Recent, (get, set, payload:Filter) => {
//     set(filterByAtom, payload)
//     const _products: Product[] = get(productsAtom)
//     let sortedProducts = [];
//     switch (payload) {
//         case Filter.LowestPrice:
//             sortedProducts = [..._products].sort((a,b) => a.cost - b.cost);
//             break;
//             case Filter.HighestPrice:
//             sortedProducts = [..._products].sort((a,b) => b.cost - a.cost);
//             break;
//         case Filter.Recent:
//             sortedProducts = [..._products];
//             break;
//     }
//     set(productsSortedAtom ,sortedProducts);
//     set(pageItemsAtom, sortedProducts as [] )

// })

export { filterRx, filterOb, Filter }