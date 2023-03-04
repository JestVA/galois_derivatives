import WithAnimation from "../../Animation/WithAnimation"
import { fadeInOut } from "../../../utils/animationVariants"

const Loading = () => {
    return <WithAnimation
        variants={fadeInOut}
    >
        Generating Description...
    </WithAnimation>
}

export default Loading
