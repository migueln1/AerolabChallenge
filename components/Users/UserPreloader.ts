import { useAtomValue } from "jotai";
import { userAtom } from "../../domain/stores/UserStore";

const UserPreloader = () => {
    useAtomValue(userAtom)
    return null;
}
export default UserPreloader;