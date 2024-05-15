import { TitleProps } from "./types"

const Title = ({ children }: TitleProps) => {
    return <h1 className="text-orange-100 text-4xl font-medium">{children}</h1>
}

export default Title