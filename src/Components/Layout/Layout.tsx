import { FC, ReactNode } from 'react'
import Footer from 'Components/Footer/Footer'

import cls from './Layout.module.scss'
import Header from 'Components/Header/Header'

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Header />
            <div className={cls.child}>
                {children}
            </div>
            <Footer />
        </>
    )
}