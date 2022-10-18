import { atom } from "jotai";

type PaginationInput = {
    page?: number,
    rowsPerPage?: number
} 

const defaultPagination : PaginationInput = { page: 1, rowsPerPage: 16 };
const paginationAtom = atom(defaultPagination, (get, set, payload: PaginationInput) => {
    const current = get(paginationAtom);
    const newest = {...current,...payload};
    set(paginationAtom, newest)
})

export { paginationAtom }