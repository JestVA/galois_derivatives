import WithAnimation from "../../Animation/WithAnimation"
import { fadeInOut } from "../../../utils/animationVariants"

type Props = {
    error: unknown
}

const FetchError = ({ error }: Props) => {
    return <WithAnimation
        variants={fadeInOut}
    >
        {JSON.stringify(error)}
    </WithAnimation>
}

export default FetchError
