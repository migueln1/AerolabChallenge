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
            <Image src="/aerolab-logo.svg" width={39} height={36} alt="Aerolab logo"/>
            <div className="flex flex-row gap-x-5 items-center">
                <span className="text-slate-700">{name}</span>
                <div className="after:border-x scale-125 rotate-12 after:border-slate-300 after:content-['']"></div>
                <div className="flex items-center gap-2 select-none">
                {/* <div className="flex items-center gap-2 select-none bg-slate-100 border-slate-50 shadow-md border px-4 py-2 rounded-xl"> */}
                    <span className="text-slate-700 antialiased leading-4">{points}</span>
                    <Image src="/icons/coinN.svg" width={18} height={18} alt="coin image" className="mt-"/>
                </div>
            </div>
        </div>
    )
}

export default HeadNav;