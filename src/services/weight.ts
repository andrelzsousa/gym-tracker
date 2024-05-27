import { WeightEntity } from "@/types/weight";
import axios from "axios";

export const getAllWeights = async () => {
    const uid = localStorage.getItem("uid");
    const response = await axios.get(`http://localhost:3333/weights/${uid}`);
    return response.data;
}

export const createWeight = async (data: Partial<WeightEntity>) => {
    const uid = localStorage.getItem("uid");
    const response = await axios.post(`http://localhost:3333/weights/${uid}`, data);
    return response.data;
}