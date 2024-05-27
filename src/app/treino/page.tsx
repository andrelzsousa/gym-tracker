"use client";

import Title from "@/components/Title"
import useAllWorkouts from "@/hooks/useAllWorkouts";
import { useSearchParams } from "next/navigation"
import { Suspense } from "react";

const Treino = () => {

    const id = useSearchParams().get("id")

    const { data, isLoading } = useAllWorkouts();

    if(isLoading || !data) return <p>Carregando...</p>

    const workouts = data.workouts;
    const workout = workouts.find(workout => workout.id === id);

    if(!workout) return <p>Workout not found</p>

    return (
    <main className="mt-10">
        <Title className="mb-8">Treino</Title>
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
                <p className="text-red-100 font-semibold text-xl">ID: </p>
                <p className="text-white">{id}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-red-100 font-semibold text-xl">Nome: </p>
                <p className="text-white">{workout.name}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-red-100 font-semibold text-xl">Tipo: </p>
                <p className="text-white">{workout.training}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-red-100 font-semibold text-xl">Descrição: </p>
                <p className="text-white">{workout.description}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-red-100 font-semibold text-xl">Descrição: </p>
                <p className="text-white">{workout.duration} min</p>
            </div>
        </div>
    </main>
    )
}

export default Treino