import { WorkoutEntity } from "@/types/workout";
import axios from "axios";

export const getAllWorkouts = async () => {
    const uid = localStorage.getItem("uid");
    console.log(uid)
    const response = await axios.get(`http://localhost:3333/workouts/${uid}`);
    return response.data;
}

export const createWorkout = async (data: Omit<WorkoutEntity, "id">) => {
    console.log(data)
    const response = await axios.post("http://localhost:3333/workouts", data);
    return response.data;
}

export const updateWorkout = async (data: WorkoutEntity) => {
    const response = await axios.put(`http://localhost:3333/workouts/${data.id}`, data);
    return response.data;
}

export const deleteWorkout = async (id: string) => {
    const response = await axios.delete(`http://localhost:3333/workouts/${id}`);
    return response.data;
}
  