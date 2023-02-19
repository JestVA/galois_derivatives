import { ReactNode } from 'react'
import MainNavigation from './MainNavigation'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className='bg-[#E5FFFF] flex flex-col justify-between min-h-screen w-[1276px] '>
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