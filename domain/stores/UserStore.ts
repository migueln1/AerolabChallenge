import { atom } from "jotai";
import { UserService } from "../services/UserService";

const userService = new UserService();
const userAtom = atom(async () => 
    await userService.getUser()
)
export { userAtom }