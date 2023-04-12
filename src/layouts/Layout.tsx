import React from 'react'
import { Header } from '../partials/Header'
import { Footer } from '../partials/Footer'

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
