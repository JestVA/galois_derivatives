import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className }: Props) => {
    return <div className={`${className} font-main-content border-4 rounded-[5px] py-[50px] px-[25px]`}>
        {children}
    </div>
}

export default Card 