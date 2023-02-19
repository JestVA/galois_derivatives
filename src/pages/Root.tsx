import Summary from '../components/main/Summary'
import WithAnimation from '../components/Animation/WithAnimation'
import { pageTransitionOne } from '../components/Animation/page-animation'

const Root = () => {
    return <WithAnimation variants={pageTransitionOne}>
        <Summary />
    </WithAnimation>
}

export default Root