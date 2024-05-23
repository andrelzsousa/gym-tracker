"use client";

import Title from "@/components/Title"
import useAllWorkouts from "@/hooks/useAllWorkouts";
import { useSearchParams } from "next/navigation"

const Treino = () => {

    const id = useSearchParams().get("id")

    const { data, isLoading } = useAllWorkouts();

    if(isLoading || !data) return <p>Carregando...</p>

    const workouts = data.workouts;
    const workout = workouts.find(workout => workout.id === id);

    if(!workout) return <p>Workout not found</p>

    return (
    <div>
        <Title className="mb-8">Treino</Title>
        <p className="text-white">id: {id}</p>
        <p className="text-white">Nome: {workout.name}</p>
        <p className="text-white">Descrição: {workout.description}</p>
        <p className="text-white">Tipo: {workout.training}</p>
    </div>
    )
}

export default Treino