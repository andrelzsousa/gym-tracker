import { twMerge } from "tailwind-merge"
import { WrapperProps } from "./types"

const Wrapper = ({ children, ...props }: WrapperProps) => {
    return <div className={twMerge("mx-auto max-w-[1368px] px-10 w-full h-full", props.className)}>{children}</div>
}

export default Wrapper