import { useAtomValue } from "jotai";
import { productsAtom } from "../../domain/stores/ProductStore";

const Preloader = () => {
    useAtomValue(productsAtom)
    return null;
}
export default Preloader;