import Image from "next/image";
import { WorkoutCardProps } from "./types";
import { useRouter } from "next/navigation";

const WorkoutCard = ({createdAt, group, type, id}:WorkoutCardProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/treino?id=${id}`);
    }

    return <div 
            className="w-72 h-40 rounded shadow-orange-500 shadow-lg p-8
            bg-[#B5C0D0] flex justify-between hover:scale-[103%] transition-all cursor-pointer"
            onClick={handleClick}
            >
        <div>
            <h3 className="text-orange-500 text-2xl">{group}</h3>
            <p className="text-orange-300 font-light text-sm">{createdAt.toDateString()}</p>
        </div>
        {type === "strength" && <Image src="/biceps.png" width={90} height={50} alt="Dumbbell" />}
        {type === "cardio" && <Image src="/heart.png" width={90} height={50} alt="Dumbbell" />}
    </div>
}

export default WorkoutCard;