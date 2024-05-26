"use client";

import Title from "@/components/Title";
import WorkoutCard from "@/components/WorkoutCard";
import { WorkoutCardProps } from "@/components/WorkoutCard/types";
import useAllWorkouts from "@/hooks/useAllWorkouts";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const { data, isLoading } = useAllWorkouts()

  if(isLoading || !data) return null;
  
  const workouts = data.workouts;

  return (
    <main className="mt-10">
      <div className="flex justify-between items-center mb-8">
        <Title>Meus treinos</Title>
        <button 
          className="flex items-center gap-2 bg-[#A91D3A] px-4 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer text-white"
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
