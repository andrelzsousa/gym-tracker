export interface WorkoutCardProps {
    name: string;
    created_at: Date;
    training: "Cardio" | "Strength";
    id: string;
}