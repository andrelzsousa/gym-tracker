"use client";

import Title from "@/components/Title";
import Image from "next/image";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as chartJSTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import WeightTable from "@/components/Table";
import useAllWeights from "@/hooks/useAllWeights";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createWeight } from "@/services/weight";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  chartJSTitle,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Evolução do Peso',
    },
  },
};


// const weightData = [
//   { date: new Date('2021-01-01'), weight: 70 },
//   { date: new Date('2021-02-01'), weight: 72 },
//   { date: new Date('2021-03-01'), weight: 71 },
//   { date: new Date('2021-04-01'), weight: 73 },
//   { date: new Date('2021-05-01'), weight: 74 },
//   { date: new Date('2021-06-01'), weight: 75 },
//   { date: new Date('2021-07-01'), weight: 76 },
// ];


export default function Home() {

  const [initialWeight, setInitialWeight] = useState(0);
  const [targetWeight, setTargetWeight] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);

  const queryClient = useQueryClient();
  const { data: weights } = useAllWeights();

  const weightData = weights?.map(weight => ({
    date: new Date(weight.recorded_at),
    weight: weight.currentWeight
  }))

  const labels = weightData?.map(weight => weight.date.toDateString());
  const weightsChart =  weightData?.map(weight => weight.weight);

  const targetWeightData = weights?.map(weight => weight.targetWeight)

  console.log(targetWeightData)

  const data = {
    labels,
    datasets: [
      {
        label: 'Peso',
        data: weightsChart,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.25
      },
      {
        label: "Peso abate",
        fill: true,
        backgroundColor: "#000000",
        borderColor: "#cccccc",
        borderWidth: 3,
        data: targetWeightData?.slice(0, 1),
        tension: 0.1,
        pointRadius: 5,
      },
    ],
  };

  const firstRecordMutation = useMutation(async () => {
    return await createWeight({
      currentWeight: initialWeight,
      targetWeight,
      recorded_at: new Date()
    })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['weights'])
    }
  })

  const createRecordMutation = useMutation(async () => {
    return await createWeight({
      currentWeight,
      recorded_at: new Date()
    })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['weights'])
    }
  })

  const firstRecord = async () => {
    await firstRecordMutation.mutateAsync();
  }

  const createRecord = async () => {
    await createRecordMutation.mutateAsync();
  }

  if(!weights) return <div>Carregando...</div>

  return (
    <main>
      <Title className="mb-8">Meu Peso</Title>
      <div className="w-full grid grid-cols-5 gap-10">
        <div className="col-span-3 bg-white h-fit rounded p-4">
          <Line options={options} data={data} />
        </div>
        {weights.length > 0 ? (
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <input 
                  type="number" 
                  className="flex-1 p-2 border border-gray-300 rounded" 
                  value={currentWeight} 
                  onChange={(e) => setCurrentWeight(Number(e.target.value))} 
                />
              <button className="w-10 h-10 bg-white rounded" onClick={createRecord}>+</button>
            </div>
            <WeightTable data={weightData || []} />
          </div>
          ) : (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-5">
                 <div className="flex flex-col gap-1 items-center">
                    <p>Peso atual</p>
                    <input 
                      type="number" 
                      className="flex-1 p-2 border border-gray-300 rounded" 
                      value={initialWeight} 
                      onChange={(e) => setInitialWeight(Number(e.target.value))} 
                    />
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <p>Peso Meta</p>
                    <input 
                      type="number" 
                      className="flex-1 p-2 border border-gray-300 rounded" 
                      value={targetWeight} 
                      onChange={(e) => setTargetWeight  (Number(e.target.value))} 
                    />
                </div>
              </div>
              <button 
                className="flex self-center items-center gap-2 bg-[#665A48] px-4 py-3 rounded-xl transition-all hover:scale-105 cursor-pointer text-white w-full justify-center"
                onClick={firstRecord}
                >
                +
                <span>Adicionar registro</span>
              </button>
            </div>
          )}
      </div>
    </main>
  );
}
