import { WorkoutEntity } from "@/types/workout";
import axios from "axios";

export const getAllWorkouts = async () => {
    const response = await axios.get("http://localhost:3333/workouts/1e666124-6823-414a-8683-466e206687b0");
    return response.data;
}

export const createWorkout = async (data: Omit<WorkoutEntity, "id">) => {
    const response = await axios.post("http://localhost:3333/workouts", data);
    return response.data;
}