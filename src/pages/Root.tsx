import Summary from '../components/main/summary/Summary'
import WithAnimation from '../components/Animation/WithAnimation'
import { pageTransitionOne } from '../utils/animationVariants'

const Root = () => {
    return <WithAnimation variants={pageTransitionOne}>
        <Summary />
    </WithAnimation>
}

export default Root