import { Routes, Route, useLocation } from 'react-router-dom';

import Root from '../pages/Root'
import About from '../pages/About'
import Optics from "../pages/Optics";
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Root />} />
                <Route path='/About' element={<About />} />
                <Route path='/Optics' element={<Optics />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes