export interface WorkoutCardProps {
    group: string;
    createdAt: Date;
    type: "cardio" | "strength";
    id: string;
}