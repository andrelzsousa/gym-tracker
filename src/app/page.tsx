"use client";

import Title from "@/components/Title";
import WorkoutCard from "@/components/WorkoutCard";
import { WorkoutCardProps } from "@/components/WorkoutCard/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const workouts: WorkoutCardProps[] = [
    {
      group: "Peito",
      createdAt: new Date(),
      type: "strength",
      id: "1"
    },
    
    {
      group: "Corrida",
      createdAt: new Date(),
      type: "cardio",
      id: "2"
    }
  ]

  return (
    <main>
      <div className="flex justify-between items-center mb-8">
        <Title>Meus treinos</Title>
        <button 
          className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer"
          onClick={() => router.push("/criar-treino")}
          >
          +
          <span>Adicionar treino</span>
        </button>
      </div>
      <div className="flex gap-10 flex-wrap">
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} {...workout} />
        ))}
      </div>
    </main>
  );
}
