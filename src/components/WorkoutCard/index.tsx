import Image from "next/image";
import { WorkoutCardProps } from "./types";
import { useRouter } from "next/navigation";
import ContextMenuClick from "../ContextMenuClick";
import { useMutation, useQueryClient } from "react-query";
import { deleteWorkout } from "@/services/workouts";

const WorkoutCard = ({created_at, name, training, id}:WorkoutCardProps) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation(async (id: string) => {
        return await deleteWorkout(id)
    },{
        onSuccess: () => {
            queryClient.invalidateQueries(["workouts"])
        }
    })

    const handleClick = () => {
        router.push(`/treino?id=${id}`);
    }

    const handleDelete = () => {
        mutation.mutateAsync(id);
    }

    return (
        <ContextMenuClick options={[
            {label: "Editar", onClick: () => router.push(`/criar-treino?id=${id}`)},
            {label: "Excluir", onClick: () => handleDelete()}
        ]}>
            <div 
                className="w-72 h-40 rounded bg-gray-100 p-8
                bg-greenGroup-200 flex justify-between hover:scale-[103%] transition-all cursor-pointer"
                onClick={handleClick}
            >
                <div>
                    <h3 className="text-white text-2xl font-medium">{name}</h3>
                    <p className="text-[#A91D3A] text-sm">{new Date(created_at).toDateString()}</p>
                </div>
                {/* {training === "Strength" && <Image src="/biceps.png" width={90} height={50} alt="Dumbbell" />}
                {training === "Cardio" && <Image src="/heart.png" width={90} height={50} alt="Dumbbell" />} */}
                <div className="self-center">
                    {training === "Strength" && <p className="text-7xl">💪</p>}
                    {training === "Cardio" && <p className="text-7xl">❤️</p>}
                </div>
            </div>
        </ContextMenuClick>
    )
}

export default WorkoutCard;