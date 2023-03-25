import { useState } from "react"
import { AnimatePresence } from 'framer-motion'
import Email from "./Email"
import ContactUs from "./ContactUs"


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
                <span> {year} Galois Derivatives | </span>
                <div
                    className='inline-block'
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <AnimatePresence mode='wait'>
                        {!hover && (
                            <Email key='1' />
                        )}
                        {hover && (
                            <ContactUs key='2' />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer