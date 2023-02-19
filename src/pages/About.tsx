import Team from '../components/main/Team'
import WithAnimation from '../components/Animation/WithAnimation'
import { pageTransitionTwo } from '../components/Animation/animationVariants'


const About = () => {
    return (
        <WithAnimation variants={pageTransitionTwo}>
            <Team />
        </WithAnimation>
    )
}

export default About