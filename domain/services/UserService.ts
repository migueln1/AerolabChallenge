import { BaseService } from "./BaseService";


export type User = {
    id: string,
    name: string,
    points: number,
    redeemHistory: [],
    createDate: string
}

export class UserService extends BaseService<User>{
    async getUser(headers?: [string, string][]): Promise<User> {
        return super.getEntity("/user/me", headers)
    }
}