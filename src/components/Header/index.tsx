"use client";

import { Dumbbell, LineChart, Weight } from "lucide-react";
import Wrapper from "../Wrapper";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {

    const pathname = usePathname();

    return (
    <header 
        className="fixed w-full top-0 h-28 bg-gray-900bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
    >
        <Wrapper className="text-white flex items-center">
            {/* <div className="mr-40 text-xl">LOGO</div> */}
            <Image src="/logo.webp" width={80} height={80} alt="Logo" className="mr-40"/>
            <div className="flex items-center justify-between flex-1">
                <div className="flex items-center gap-20">
                    <Dumbbell className={`transition-all cursor-pointer 
                        ${pathname === "/" ? "text-orange-100 hover:text-orange-300" : "hover:text-orange-300"}`} 
                        size={28}
                    />
                    <Weight className={`transition-all cursor-pointer 
                        ${pathname === "/peso" ? "text-orange-100 hover:text-orange-300" : "hover:text-orange-300"}`} 
                        size={28}
                    />
                    <LineChart className={`transition-all cursor-pointer 
                        ${pathname === "/progessao" ? "text-orange-100 hover:text-orange-300" : "hover:text-orange-300"}`} 
                        size={28}
                    />
                </div>
                <div>Andre Sousa</div>
            </div>
        </Wrapper>
    </header>
        )
}

export default Header;