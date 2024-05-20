"use client";

import { Dumbbell, LineChart, Weight } from "lucide-react";
import Wrapper from "../Wrapper";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {

    const pathname = usePathname();
    const router = useRouter();

    return (
    <header 
        className="fixed w-full top-0 h-28 z-40 bg-light-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 shadow shadow-orange-500"
    >
        <Wrapper className="text-white flex items-center">
            {/* <div className="mr-40 text-xl">LOGO</div> */}
            <Image src="/logo.jpeg" width={80} height={80} alt="Logo" className="mr-40"/>
            <div className="flex items-center justify-between flex-1">
                <div className="flex items-center gap-20">
                    <Dumbbell 
                        className={`transition-all cursor-pointer 
                            ${pathname === "/" || pathname.startsWith("/treino") ? "text-orange-100 hover:text-orange-300" : "hover:text-orange-300"}`} 
                        size={28}
                        onClick={() => router.push("/")}
                    />
                    <Weight className={`transition-all cursor-pointer 
                        ${pathname === "/peso" ? "text-orange-100 hover:text-orange-300" : "hover:text-orange-300"}`} 
                        size={28}
                        onClick={() => router.push("/peso")}
                    />
                    <LineChart className={`transition-all cursor-pointer 
                        ${pathname === "/progressao" ? "text-orange-100 hover:text-orange-300" : "hover:text-orange-300"}`} 
                        size={28}
                        onClick={() => router.push("/progressao")}
                    />
                </div>
                <div>Andre Sousa</div>
            </div>
        </Wrapper>
    </header>
        )
}

export default Header;