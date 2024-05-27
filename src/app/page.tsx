"use client";

import Title from "@/components/Title";
import WorkoutCard from "@/components/WorkoutCard";
import { WorkoutCardProps } from "@/components/WorkoutCard/types";
import useAllWorkouts from "@/hooks/useAllWorkouts";
import { createUser } from "@/services/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "react-query";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const mutationCreate = useMutation(async () => {
    return await createUser({
      name,
      email,
      password: "teste123",
      age: 20
    })
  }, {
    onSuccess: (data) => {
      router.push("/treinos")
      localStorage.setItem("uid", data)
      localStorage.setItem("name", name)
    }
  })

  const handleCreateUser = () => {
    mutationCreate.mutateAsync()
  }
  
  return (
    <main className="mt-10 flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <Title>Novo usuário</Title>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Nome</p>
                <input type="text" className="bg-white border border-red-100 focus:outline-red-300 rounded px-4 py-2 w-64" placeholder="José" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Email</p>
                <input type="text" className="bg-white border border-red-100 focus:outline-red-300 rounded px-4 py-2 w-64" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Senha</p>
                <input className="bg-white border border-red-100 focus:outline-red-300 rounded px-4 py-2 w-64" type="password" placeholder="********"/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-medium">Idade</p>
                <input type="number" className="bg-white border border-red-100 focus:outline-red-300 rounded px-4 py-2 w-64" placeholder="20 anos"/>
            </div>
            <button 
              className="flex items-center gap-2 bg-[#A91D3A] px-4 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer w-fit self-center text-white"
              onClick={handleCreateUser}
              >
              <span>Entrar</span>
            </button>
          </div>
        </div>
    </main>
  );
}
