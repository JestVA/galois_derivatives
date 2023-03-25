import { ReactNode } from 'react'
import MainNavigation from './mainNav/MainNavigation'
import Footer from './footer/Footer'
import Header from './header/Header'

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className='bg-[#fbfb1e] flex flex-col min-h-[70vh] justify-between w-[1276px] '>
            <div>
                <Header />
                <MainNavigation />
            </div>
            <main className='px-[135px] py-[25px] overflow-hidden'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout