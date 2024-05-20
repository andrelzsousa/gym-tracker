import { getAllWorkouts } from "@/services/workouts";
import { WorkoutEntity } from "@/types/workout";
import { UseQueryResult, useQuery } from "react-query";

type workoutResponse = {
    workouts: WorkoutEntity[]
}

const getAllWorkoutsQueryKey = () => {
    return ['workouts'];
}

const getAllWorkoutsQueryFn = async (): Promise<workoutResponse> => {
    return await getAllWorkouts();
}

const useAllWorkouts = (): UseQueryResult<workoutResponse> => {
    return useQuery<workoutResponse>(getAllWorkoutsQueryKey(), getAllWorkoutsQueryFn, {
        staleTime: 20000,
        cacheTime: 10000
    });
}

export default useAllWorkouts;