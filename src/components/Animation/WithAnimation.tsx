import { motion } from "framer-motion"
import { ReactNode } from "react"
import { Variants } from "framer-motion"


type Props = {
    children: ReactNode
    variants: Variants
}

const WithAnimation = ({ children, variants }: Props) => {
    return <motion.div initial='out' animate='in' exit='out' variants={variants}>
        {children}
    </motion.div>
}

export default WithAnimation