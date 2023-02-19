import WithAnimation from "../../Animation/WithAnimation"
import { fadeInOut } from "../../../utils/animationVariants"

type Props = {
    description?: string,
}

const Description = ({ description }: Props) => {
    return <WithAnimation
        variants={fadeInOut}
    >
        {description}
    </WithAnimation>
}

export default Description
