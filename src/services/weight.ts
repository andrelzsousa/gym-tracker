import { WeightEntity } from "@/types/weight";
import axios from "axios";

export const getAllWeights = async () => {
    const response = await axios.get("http://localhost:3333/weights/c8bbaaec-1ea5-4850-b4ee-120ca7e9b51a");
    return response.data;
}

export const createWeight = async (data: Partial<WeightEntity>) => {
    const response = await axios.post("http://localhost:3333/weights/c8bbaaec-1ea5-4850-b4ee-120ca7e9b51a", data);
    return response.data;
}