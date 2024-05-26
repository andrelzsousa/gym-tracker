"use client";

import Title from "@/components/Title";
import { createWorkout } from "@/services/workouts";
import { WorkoutEntity } from "@/types/workout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const CriarTreinoPage = () => {

    const [workoutType, setWorkoutType] = useState<"Cardio" | "Strength">("Cardio");
    const [workoutName, setWorkoutName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [date, setDate] = useState<Date | null>(new Date());

    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation(async (data: Omit<WorkoutEntity, "id">) => {
        return await createWorkout(data)
    },{
        onSuccess: () => {
            queryClient.invalidateQueries("workouts")
            router.push("/")
        }
    })

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value ? new Date(e.target.value) : null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newData: Omit<WorkoutEntity, "id"> = {
            training: workoutType,
            name: workoutName,
            description,
            duration,
            created_at: date as Date,
            userId: "c8bbaaec-1ea5-4850-b4ee-120ca7e9b51a"
        }

        mutation.mutateAsync(newData)
    }

    return (
    <div>
        <Title className="mb-8">Criar treino</Title>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                    <p className="text-white text-xl font-medium">Nome do treino</p>
                    <input type="text" className="bg-white border border-red-100 focus:outline-red-300 rounded px-4 py-2 w-64" placeholder="Costas e biceps" onChange={(e) => setWorkoutName(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-white text-xl font-medium">Tipo de treino</p>
                    <div className="flex items-center gap-6">
                        <div 
                            className={`cursor-pointer h-24 w-24 rounded bg-white flex items-center justify-center 
                                ${workoutType === "Strength" ? "border-2 border-red-500" : ""}`}
                            onClick={() => setWorkoutType("Strength")}
                        >
                            <Image src="/biceps.png" width={48} height={48} alt="Cardio" />
                        </div>
                        <div className={`cursor-pointer h-24 w-24 rounded bg-white flex items-center justify-center 
                                ${workoutType === "Cardio" ? "border-2 border-red-500" : ""}`}
                            onClick={() => setWorkoutType("Cardio")}
                        >
                            <Image src="/heart.png" width={48} height={48} alt="Cardio" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Descrição</p>
                <textarea className="bg-white  border border-red-100 focus:outline-red-300  rounded px-4 py-2 w-64 h-24" placeholder="Descreva seu treino" onChange={(e) => setDescription(e.target.value)}  />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Duração</p>
                <input type="number" className="bg-white  border border-red-100 focus:outline-red-300  rounded px-4 py-2 w-64" placeholder="60 min" onChange={(e) => setDuration(Number(e.target.value))}/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Data</p>
                <input type="date" className="bg-white  border border-red-100 focus:outline-red-300  rounded px-4 py-2 w-64" onChange={(e) =>  handleDateChange(e)} />
            </div>
            <button 
                className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer w-40 justify-center"
                type="submit"
            >
            Criar treino
            </button>
        </form>
    </div>
    )
}

export default CriarTreinoPage;