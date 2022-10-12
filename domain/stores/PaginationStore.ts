import { atom } from "jotai";
type PaginationProps = {
    page: number,
    rowsPerPage: number
}
const initialProps : PaginationProps = { page:1, rowsPerPage:16 } 
const paginationAtom = atom<PaginationProps>(initialProps); 
const pageItemsAtom = atom([], (get, set , payload:[]) => {
    const {page, rowsPerPage} = get(paginationAtom);
    const start = page > 1 ? page - 1 * rowsPerPage : 0;
    const items = payload.length - rowsPerPage! >= rowsPerPage! ? 
        payload.slice(start,start+rowsPerPage) : 
        payload.slice(start);
    set(pageItemsAtom, items as [])
})
export { paginationAtom, pageItemsAtom }