import { WaterEntity } from "@/types/water";
import { WeightEntity } from "@/types/weight";
import axios from "axios";

export const getAllWaters = async () => {
    const response = await axios.get("http://localhost:3333/waters/c8bbaaec-1ea5-4850-b4ee-120ca7e9b51a");
    return response.data;
}

export const createWater = async (data: Partial<WaterEntity>) => {
    console.log(data)
    const response = await axios.post("http://localhost:3333/water/c8bbaaec-1ea5-4850-b4ee-120ca7e9b51a", data);
    console.log(response.data)
    return response.data;
}