import { WorkoutEntity } from "@/types/workout";
import axios from "axios";

export const getAllWorkouts = async () => {
    const response = await axios.get("http://localhost:3333/workouts/c8bbaaec-1ea5-4850-b4ee-120ca7e9b51a");
    return response.data;
}

export const createWorkout = async (data: Omit<WorkoutEntity, "id">) => {
    console.log(data)
    const response = await axios.post("http://localhost:3333/workouts", data);
    return response.data;
}