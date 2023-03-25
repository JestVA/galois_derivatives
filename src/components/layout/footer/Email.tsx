import WithAnimation from "../../Animation/WithAnimation"
import { fadeInOut } from "../../../utils/animationVariants"

const Email = () => {
    return <WithAnimation
        variants={fadeInOut}
    >
        <a className="text-green" href='mailto:hello@galois.cloud'>
            hello@galois.cloud
        </a>
    </WithAnimation>
}

export default Email