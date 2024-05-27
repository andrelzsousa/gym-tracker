"use client";

import { Droplet, Dumbbell, LineChart, User, Weight } from "lucide-react";
import Wrapper from "../Wrapper";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import ContextMenuClick from "../ContextMenuClick";

const Header = () => {

    const pathname = usePathname();
    const router = useRouter();
    const name = localStorage.getItem("name");
    return (
    <header 
        className="fixed w-full top-0 h-28 z-40 bg-gray-100 bg-opacity-90 shadow-lg"
    >
        <Wrapper className="text-white flex items-center">
            {/* <div className="mr-40 text-xl">LOGO</div> */}
            <Image src="/logo.png" width={120} height={120} alt="Logo" className="mr-40 cursor-pointer" onClick={() => router.push("/treinos")}/>
            {pathname !== "/" &&   <div className="flex items-center justify-between flex-1">
                <div className="flex items-center gap-20">
                    <Dumbbell 
                        className={`transition-all cursor-pointer 
                            ${pathname === "/" || pathname.startsWith("/treino") ? "text-red-300 hover:text-red-100" : "hover:text-red-100"}`} 
                        size={28}
                        onClick={() => router.push("/treinos")}
                    />
                    <Weight className={`transition-all cursor-pointer 
                        ${pathname === "/peso" ? "text-red-300 hover:text-red-100" : "hover:text-orange-200"}`} 
                        size={28}
                        onClick={() => router.push("/peso")}
                    />
                    <Droplet className={`transition-all cursor-pointer 
                        ${pathname === "/agua" ? "text-red-300 hover:text-red-100" : "hover:text-orange-200"}`} 
                        size={28}
                        onClick={() => router.push("/agua")}
                    />
                </div>
                <ContextMenuClick options={[{label: "Sair", onClick: () => router.push( "/")}]}><div className="text-white text-lg flex items-start gap-2 hover:underline"><User /> {name}</div></ContextMenuClick>
            </div>}
        </Wrapper>
    </header>
        )
}

export default Header;