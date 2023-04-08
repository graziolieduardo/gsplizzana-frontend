import { Layout } from '@/src/layouts/Layout';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { SignupContextProvider } from '../contexts/SignupContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SignupContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SignupContextProvider>
    )
}
