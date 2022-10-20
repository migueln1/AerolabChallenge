import { useAtom } from "jotai";
import Image from "next/image";
import { User } from "../../domain/services/UserService";
import { userAtom } from "../../domain/stores/UserStore";


type HeadViewProps = {
    user: User
}

const HeadNav = () => {
    const [user] = useAtom(userAtom)

    return(<HeadNavView user={user}/>)
}
const HeadNavView = ({user:{name, points}}:HeadViewProps) => {
    return(
        <div className="fixed top-0 w-screen z-50 shadow-lg bg-white h-[4.445rem] flex items-center justify-between px-10">
            <div className="relative w-[39px] h-[36px]">
                <Image alt="coin icon" src="/aerolab-logo.svg" layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-row gap-x-5 items-center">
                <span className="text-slate-700">{name}</span>
                <div className="after:border-x scale-125 rotate-12 after:border-slate-300 after:content-['']"></div>
                <div className="flex items-center justify-between gap-2 select-none">
                    <span className="text-slate-700 antialiased leading-4">{points}</span>
                    <div className="relative w-4 h-4">
                        <Image alt="coin icon" src="/icons/coinN.svg" layout="fill" objectFit="cover"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadNav;