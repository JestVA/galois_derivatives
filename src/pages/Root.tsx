import Summary from '../components/main/Summary'
import { motion } from 'framer-motion'
import { pageTransitionOne } from '../components/Animation/page-animation'

const Root = () => {
    return <motion.div initial='out' animate='in' exit='out' variants={pageTransitionOne}>
        <Summary />
    </motion.div>
}

export default Root