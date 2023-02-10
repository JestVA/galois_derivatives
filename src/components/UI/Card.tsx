import { ReactNode } from "react"

type props = {
    children: ReactNode;
    className?: string;
}

const Card = (props: props) => {
    return <div className={`${props.className} font-main-content border-4 rounded-[5px] py-[63px] px-[25px]`}>
        {props.children}
    </div>
}

export default Card 