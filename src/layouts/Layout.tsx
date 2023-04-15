import React from 'react'
import { Header } from '../partials/Header'
import { Footer } from '../partials/Footer'
import Head from 'next/head'

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>GSP Lizzana</title>
                <meta name="description" content="Il Mondiale si gioca sul gonfiabile" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/static/logo-arancione.svg" />
            </Head>
            <div className='h-screen flex flex-col'>
                <Header />
                <main className='flex-1'>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
