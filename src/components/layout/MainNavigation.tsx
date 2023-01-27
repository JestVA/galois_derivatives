import classes from './Footer.module.css'

const MainNavigation = () => {
    return <div className='flex flex-row p-4 justify-between'>
        <a href='/' className='mr-3'>Logo</a>
        <ul className='flex flex-row gap-8 text-lg font-semibold'>
            <li><a href='#' className='border-b-2 border-gray-300'>Home</a></li>
            <li><a href='#' className='hover:border-b-2 border-gray-300'>About</a></li>
        </ul>
        <div></div>
    </div>
}

export default MainNavigation