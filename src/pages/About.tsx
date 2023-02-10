import Team from '../components/main/Team'
import { motion } from 'framer-motion'
import { pageTransitionTwo } from '../components/Animation/page-animation'


const About = () => {
    return (
        <motion.div initial='out' animate='in' exit='out' variants={pageTransitionTwo} transition={{ type: "spring", stiffness: 100 }}>
            <Team />
        </motion.div>
    )
}

export default About