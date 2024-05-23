import { getAllWeights } from "@/services/weight";
import { getAllWorkouts } from "@/services/workouts";
import { WeightEntity } from "@/types/weight";
import { WorkoutEntity } from "@/types/workout";
import { UseQueryResult, useQuery } from "react-query";

const getAllWeightsQueryKey = () => {
    return ['weights'];
}

const getAllWeightsQueryFn = async (): Promise< WeightEntity[]> => {
    return await getAllWeights();
}

const useAllWeights = (): UseQueryResult< WeightEntity[]> => {
    return useQuery<WeightEntity[]>(getAllWeightsQueryKey(), getAllWeightsQueryFn, {
        staleTime: 20000,
        cacheTime: 10000
    });
}

export default useAllWeights;