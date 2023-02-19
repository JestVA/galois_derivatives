import Team from '../components/main/Team'
import WithAnimation from '../components/Animation/WithAnimation'
import { pageTransitionTwo } from '../utils/animationVariants'


const About = () => {
    return (
        <WithAnimation variants={pageTransitionTwo}>
            <Team />
        </WithAnimation>
    )
}

export default About