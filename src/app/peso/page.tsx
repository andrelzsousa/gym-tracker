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

const labels = ['Janeiro', 'Fevereior', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
const weights = [70, 72, 71, 73, 74, 75, 76];

export const data = {
  labels,
  datasets: [
    {
      label: 'Peso',
      data: weights,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

const weightData = [
  { date: new Date('2021-01-01'), weight: 70 },
  { date: new Date('2021-02-01'), weight: 72 },
  { date: new Date('2021-03-01'), weight: 71 },
  { date: new Date('2021-04-01'), weight: 73 },
  { date: new Date('2021-05-01'), weight: 74 },
  { date: new Date('2021-06-01'), weight: 75 },
  { date: new Date('2021-07-01'), weight: 76 },
];


export default function Home() {
  return (
    <main>
      <Title className="mb-8">Meu Peso</Title>
      <div className="w-full grid grid-cols-5 gap-10">
        <div className="col-span-3 bg-white h-fit rounded p-4">
          <Line options={options} data={data} />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <input type="number" className="flex-1 p-2 border border-gray-300 rounded" />
            <button className="w-10 h-10 bg-white rounded">+</button>
          </div>
          <WeightTable data={weightData} />
        </div>
      </div>
    </main>
  );
}
