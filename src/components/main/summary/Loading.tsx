import WithAnimation from "../../Animation/WithAnimation"
import { fadeInOut } from "../../../utils/animationVariants"

const Loading = () => {
    return <WithAnimation
        variants={fadeInOut}
    >
        devfrend@galois ~/ 🍣{'>'} Yuki, what did you do at work today?
    </WithAnimation>
}

export default Loading
