"use client";

import Title from "@/components/Title";
import Image from "next/image";
import { useState } from "react";

const CriarTreinoPage = () => {

    const [workoutType, setWorkoutType] = useState<"cardio" | "strength">("cardio");

    return (
    <div>
        <Title className="mb-8">Criar treino</Title>
        <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Tipo de treino</p>
                <div className="flex items-center gap-6">
                    <div 
                        className={`cursor-pointer h-24 w-24 rounded bg-white flex items-center justify-center 
                            ${workoutType === "strength" ? "border-2 border-red-500" : ""}`}
                        onClick={() => setWorkoutType("strength")}
                    >
                        <Image src="/biceps.png" width={48} height={48} alt="Cardio" />
                    </div>
                    <div className={`cursor-pointer h-24 w-24 rounded bg-white flex items-center justify-center 
                            ${workoutType === "cardio" ? "border-2 border-red-500" : ""}`}
                        onClick={() => setWorkoutType("cardio")}
                    >
                        <Image src="/heart.png" width={48} height={48} alt="Cardio" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Nome do treino</p>
                <input type="text" className="bg-white rounded px-4 py-2 w-64" placeholder="Costas e biceps"/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Descrição</p>
                <textarea className="bg-white rounded px-4 py-2 w-64 h-24" placeholder="Descreva seu treino" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Data</p>
                <input type="date" className="bg-white rounded px-4 py-2 w-64"/>
            </div>
            <button 
                className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer w-40 justify-center"
            >
            Criar treino
            </button>
        </form>
    </div>
    )
}

export default CriarTreinoPage;