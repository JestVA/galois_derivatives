import Logo from './Logo'
import { NavLink, Link } from 'react-router-dom'

const activeClass = 'bg-primary text-green font-nav px-3 py-1 text-[30px] '
const linkClass = 'font-nav px-3 py-1 text-[30px] hover:bg-primary hover:text-green'

type Link = {
    title: string,
    url: string
}

const navLinks: Link[] = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '/about'
    }
]

const MainNavigation = () => {
    const navLinkComponents = navLinks.map((link) => (
        <NavLink to={link.url} className={linkData => linkData.isActive ? activeClass : linkClass}> {link.title} </NavLink>
    ))

    console.log(navLinks)

    return (
        <nav className='px-6 flex justify-between items-center'>
            <Link to='/' className='mr-3 scale-[140%]'><Logo /></Link>
            <div className='flex justify-center gap-3'>
                {navLinkComponents[0]}
                {navLinkComponents[1]}
            </div>
            {navLinkComponents[2]}
        </nav>
    )
}

export default MainNavigation