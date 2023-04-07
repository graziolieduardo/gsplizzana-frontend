import React from 'react'
import { Header } from '../partials/Header'
import { Footer } from '../partials/Footer'

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
