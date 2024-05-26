import { twMerge } from "tailwind-merge"
import { TitleProps } from "./types"

const Title = ({ children, className }: TitleProps) => {
    return <h1 className={twMerge("text-white text-4xl font-medium", className)}>{children}</h1>
}

export default Title