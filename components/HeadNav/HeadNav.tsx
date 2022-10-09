import Image from "next/image";
import { useEffect, useState } from "react";
import { User, UserService } from "../../domain/services/UserService";

type HeadViewProps = {
    user: User
}
const initialState: User = {
    id: '',
    name: '',
    points: 0,
    redeemHistory: [],
    createDate: ''
}
const HeadNav = () => {
    const userService = new UserService();
    const [user, setUser] = useState(initialState);
    useEffect(() => {
        const fetchUser = async () => {
            const response = await userService.getUser();
            setUser(response)
        }
        fetchUser().catch((e) => console.log(e))
    },[])

    return(
        <>
            <HeadNavView user={user}/>
        </>
    )
}
const HeadNavView = ({user:{name, points}}:HeadViewProps) => {
    return(
        <div className="h-[4.445rem] flex items-center justify-between px-10">
            <Image src="/aerolab-logo.svg" width={39} height={36}/>
            <div className="flex flex-row gap-x-5">
                <span>{name}</span>
                <div>
                    <span>{points}</span>
                </div>
            </div>
        </div>
    )
}

export default HeadNav;