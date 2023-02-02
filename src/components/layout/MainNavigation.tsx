import Logo from './Logo.jsx'
import { NavLink, Link } from 'react-router-dom'

const MainNavigation = () => {
    const activeClass = 'border-b-2 border-gray-300'
    const linkClass = 'hover:border-b-2 border-gray-300'
    return <nav className='grid grid-cols-3 p-4 '>
        <Link to='/' className='mr-3'><Logo /></Link>
        <ul className='flex flex-row gap-8 text-lg font-semibold justify-center'>
            <li><NavLink to='/' className={(navData) => navData.isActive ? activeClass : linkClass}>Home</NavLink></li>
            <li><NavLink to='/about' className={(navData) => navData.isActive ? activeClass : linkClass}>About</NavLink></li>
            <li><NavLink to='/optics' className={(navData) => navData.isActive ? activeClass : linkClass}>Optics</NavLink></li>
        </ul>
        <div></div>
    </nav>
}

export default MainNavigation