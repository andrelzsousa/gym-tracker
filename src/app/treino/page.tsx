"use client";

import Title from "@/components/Title"
import { useSearchParams } from "next/navigation"

const Treino = () => {

    const id = useSearchParams().get("id")

    return (
    <div>
        <Title className="mb-8">Treino</Title>
        <p className="text-white">id: {id}</p>
    </div>
    )
}

export default Treino