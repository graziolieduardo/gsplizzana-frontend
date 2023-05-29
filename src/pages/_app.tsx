import { Layout } from '@/src/layouts/Layout';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { SignupContextProvider } from '../contexts/SignupContext';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SignupContextProvider>
            <Layout>
                <style jsx global>{`
                        html {
                        font-family: ${inter.style.fontFamily};
                        }`}
                </style>
                <Component {...pageProps} />
            </Layout>
        </SignupContextProvider>
    )
}
