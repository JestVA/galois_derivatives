import React, { ReactNode } from 'react'
import MainNavigation from './MainNavigation'
import Footer from './Footer'

type Props = {
    children?: ReactNode
}

const Layout: React.FC<Props> = (props) => {
    return <>
        <MainNavigation />
        <main>{props.children}</main>
        <Footer />
    </>
}

export default Layout