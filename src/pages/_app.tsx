import { Layout } from '@/src/layouts/Layout';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { SignupContextProvider } from '../contexts/SignupContext';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AuthContextProvider } from '../contexts/AuthContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <SignupContextProvider>
            <AuthContextProvider>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <style jsx global>{`
                        html {
                        font-family: ${inter.style.fontFamily};
                        }`}
                        </style>
                        {getLayout(<Component {...pageProps} />)}
                    </Layout>
                </QueryClientProvider>
            </AuthContextProvider>
        </SignupContextProvider>
    )
}
