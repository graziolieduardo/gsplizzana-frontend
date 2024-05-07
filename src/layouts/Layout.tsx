import React from 'react'
import { Header } from '../partials/Header'
import { Footer } from '../partials/Footer'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type LayoutProps = {
    children: React.ReactNode
}

const queryClient = new QueryClient();

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
                <QueryClientProvider client={queryClient}>
                    <Header />
                    <main className='flex-1'>
                        {children}
                    </main>
                    <Footer />
                </QueryClientProvider>
            </div>
        </>
    )
}
