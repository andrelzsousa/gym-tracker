export interface WorkoutEntity {
    duration: number;
    created_at: Date;
    training: "Cardio" | "Strength";
    name: string;
    description: string;
    id: string;
    userId: string;
}