import { ComponentProps } from "react";

export interface TitleProps {
    children: React.ReactNode;
    className?: ComponentProps<"div">["className"];
}