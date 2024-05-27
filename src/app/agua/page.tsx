"use client";

import Title from "@/components/Title"
import useAllWaters from "@/hooks/useAllWaters";
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title as ChartTitle,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useMutation, useQueryClient } from "react-query";
import { createWater } from "@/services/water";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartTitle,
    Tooltip,
    Legend
  );

const AguaPage = () => {

    const { data: watersData, isLoading } = useAllWaters();
    const queryClient = useQueryClient();  


    const createRecordMutation = useMutation(async (amount: string) => {
        return await createWater({
            amount
        })
      }, {
        onSuccess: () => {
          queryClient.invalidateQueries(['waters'])
        }
    })

    const handleAddWater = async (amount: string) => {
        createRecordMutation.mutateAsync(amount);
    }

    if(!watersData || isLoading) return <div>Carregando...</div>;

    const waters = watersData.map(water => ({...water, amount: Number(water.amount)}));

    const todayIntake = waters.reduce((acc, water) => {
        if(new Date(water.createdAt).getDay === new Date().getDay){
            return acc + water.amount;
        }
        return acc;
    }, 0)

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 4500
            }
        }
    }

    const data = {
        labels: [new Date().toDateString()],
        datasets: [
            {
                label: 'Água',
                data: [todayIntake],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    }

    return (
    <main className="mt-10">
        <Title className="mb-8">Acompanhamento de água</Title>
        <div className="grid grid-cols-9 w-full gap-10">
            <div className="col-span-7 bg-white h-fit rounded p-4">
                <Bar options={options} data={data} />
            </div>
            <div className="flex flex-col gap-7 col-span-2">
                <p className="text-white text-3xl">Adicione: </p>
                <div 
                    className="text-xl bg-white rounded-lg p-4 text-center w-fit cursor-pointer hover:scale-105 transition-all"
                    onClick={() => handleAddWater("100")}
                >
                    + 100 ml
                </div>
                <div 
                    className="text-xl bg-white rounded-lg p-4 text-center w-fit cursor-pointer hover:scale-105 transition-all"
                    onClick={() => handleAddWater("200")}
                >
                    + 200 ml
                </div>
                <div 
                    className="text-xl bg-white rounded-lg p-4 text-center w-fit cursor-pointer hover:scale-105 transition-all"
                    onClick={() => handleAddWater("500")}
                >
                    + 500 ml
                </div>
                <div 
                    className="text-xl bg-white rounded-lg p-4 text-center w-fit cursor-pointer hover:scale-105 transition-all"
                    onClick={() => handleAddWater("1000")}
                >
                    + 1000 ml
                </div>
                <div 
                    className="text-xl bg-white rounded-lg p-4 text-center w-fit cursor-pointer hover:scale-105 transition-all"
                    onClick={() => handleAddWater("2000")}
                >
                    + 2000 ml
                </div>
            </div>
        </div>
        
    </main>
    )
}

export default AguaPage