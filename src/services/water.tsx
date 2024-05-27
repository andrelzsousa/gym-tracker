import { WaterEntity } from "@/types/water";
import { WeightEntity } from "@/types/weight";
import axios from "axios";

export const getAllWaters = async () => {
    const uid = localStorage.getItem("uid");
    const response = await axios.get(`http://localhost:3333/waters/${uid}`);
    return response.data;
}

export const createWater = async (data: Partial<WaterEntity>) => {
    const uid = localStorage.getItem("uid");
    const response = await axios.post(`http://localhost:3333/water/${uid}`, data);
    return response.data;
}