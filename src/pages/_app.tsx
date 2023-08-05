import { Layout } from '@/src/layouts/Layout';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { SignupContextProvider } from '../contexts/SignupContext';
import { Inter } from 'next/font/google';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SignupContextProvider>
              <QueryClientProvider client={queryClient}>
                <Layout>
                    <style jsx global>{`
                        html {
                        font-family: ${inter.style.fontFamily};
                        }`}
                    </style>
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        </SignupContextProvider>
    )
}
