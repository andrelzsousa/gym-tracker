"use client";

import { Dumbbell, LineChart, User, Weight } from "lucide-react";
import Wrapper from "../Wrapper";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {

    const pathname = usePathname();
    const router = useRouter();

    return (
    <header 
        className="fixed w-full top-0 h-28 z-40 bg-gray-100 bg-opacity-90 shadow-lg"
    >
        <Wrapper className="text-white flex items-center">
            {/* <div className="mr-40 text-xl">LOGO</div> */}
            <Image src="/logo.png" width={120} height={120} alt="Logo" className="mr-40"/>
            <div className="flex items-center justify-between flex-1">
                <div className="flex items-center gap-20">
                    <Dumbbell 
                        className={`transition-all cursor-pointer 
                            ${pathname === "/" || pathname.startsWith("/treino") ? "text-red-300 hover:text-red-100" : "hover:text-red-100"}`} 
                        size={28}
                        onClick={() => router.push("/")}
                    />
                    <Weight className={`transition-all cursor-pointer 
                        ${pathname === "/peso" ? "text-red-300 hover:text-red-100" : "hover:text-orange-200"}`} 
                        size={28}
                        onClick={() => router.push("/peso")}
                    />
                    <LineChart className={`transition-all cursor-pointer 
                        ${pathname === "/progressao" ? "text-red-300 hover:text-red-100" : "hover:text-orange-200"}`} 
                        size={28}
                        onClick={() => router.push("/progressao")}
                    />
                </div>
                <div className="text-white text-lg flex items-start gap-2 hover:underline"><User /> Andre Sousa</div>
            </div>
        </Wrapper>
    </header>
        )
}

export default Header;