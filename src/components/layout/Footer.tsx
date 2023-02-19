import { useState } from "react"
import { AnimatePresence } from 'framer-motion'
import WithAnimation from "../Animation/WithAnimation"
import { fadeInOut } from "../Animation/animationVariants"

const Footer = () => {
    const [hover, setHover] = useState(false)

    const mouseEnterHandler = () => {
        setHover(true)
    }

    const mouseLeaveHandler = () => {
        setHover(false)
    }

    const year = new Date().getFullYear()
    return <footer className="mx-auto pb-[22px]" >
        <div className="p-3 border-y-[1px] border-primary">
            <div className="text-bold text-[20px] font-nav w-[500px]">
                <span> {year} Galois Derivaties | </span>
                <div
                    className='inline-block'
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <AnimatePresence mode='wait'>
                        {!hover && (
                            <WithAnimation
                                key='1'
                                variants={fadeInOut}
                            >
                                <a href='mailto:hello@galois.cloud'>
                                    Email: hello@galois.cloud
                                </a>
                            </WithAnimation>
                        )}
                        {hover && (
                            <WithAnimation
                                key='2'
                                variants={fadeInOut}
                            >
                                <a href='mailto:hello@galois.cloud'>
                                    Contact Us
                                </a>
                            </WithAnimation>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer