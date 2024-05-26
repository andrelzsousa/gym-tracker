import Image from "next/image";
import { WorkoutCardProps } from "./types";
import { useRouter } from "next/navigation";

const WorkoutCard = ({created_at, name, training, id}:WorkoutCardProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/treino?id=${id}`);
    }

    return (
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
    )
}

export default WorkoutCard;