import { WeightEntity } from "@/types/weight";
import axios from "axios";

export const getAllWeights = async () => {
    const response = await axios.get("http://localhost:3333/weights/1e666124-6823-414a-8683-466e206687b0");
    return response.data;
}

export const createWeight = async (data: Partial<WeightEntity>) => {
    const response = await axios.post("http://localhost:3333/weights/1e666124-6823-414a-8683-466e206687b0", data);
    return response.data;
}