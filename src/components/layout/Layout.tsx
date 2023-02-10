import React, { ReactNode } from 'react'
import MainNavigation from './MainNavigation'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children?: ReactNode
}

const Layout: React.FC<Props> = (props) => {
    return (
        <div className='bg-[#E5FFFF] flex flex-col justify-between min-h-screen w-[1276px] '>
            <div>
                <Header />
                <MainNavigation />
            </div>
            <main className='px-[135px] py-[25px] overflow-hidden'>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout