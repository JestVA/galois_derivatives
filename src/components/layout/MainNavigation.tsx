import Logo from './Logo.jsx'
import { NavLink, Link } from 'react-router-dom'

const MainNavigation = () => {
    const activeClass = 'bg-primary text-green font-nav px-3 py-1 text-[30px] '
    const linkClass = 'font-nav px-3 py-1 text-[30px] hover:bg-primary hover:text-green'
    const navLinks = [
        ['Home', '/',],
        ['About', '/about'],
        ['Optics', '/optics']
    ].map(([title, url]) => (
        <NavLink to={url} className={linkData => linkData.isActive ? activeClass : linkClass}> {title} </NavLink>
    ))
    return <nav className='p-4 flex justify-between items-center'>
        <Link to='/' className='mr-3 scale-[140%]'><Logo /></Link>
        <div className='flex justify-center gap-3'>
            {navLinks[0]}
            {navLinks[1]}
        </div>
        {navLinks[2]}
    </nav>
}

export default MainNavigation