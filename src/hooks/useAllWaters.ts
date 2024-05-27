import { getAllWaters } from "@/services/water";
import { WaterEntity } from "@/types/water";
import { UseQueryResult, useQuery } from "react-query";

const getAllWatersQueryKey = () => {
    return ['waters'];
}

const getAllWatersQueryFn = async (): Promise<WaterEntity[]> => {
    return await getAllWaters();
}

const useAllWaters = (): UseQueryResult<WaterEntity[]> => {
    return useQuery<WaterEntity[]>(getAllWatersQueryKey(), getAllWatersQueryFn, {
        staleTime: 20000,
        cacheTime: 10000
    });
}

export default useAllWaters;