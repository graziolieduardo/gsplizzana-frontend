import TableProva from './TableProva'
import { useQueries } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import UniqueTable from './UniqueTable';

export default function Gironi() {
    const router = useRouter();

    const [MA, FA, FB, FC, FD] = useQueries({
        queries: [
            {
                queryKey: ['MA'],
                queryFn: () =>
                    axios
                        .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${1}/rankings`)
                        .then((res) => res.data),
            },
            {
                queryKey: ['FA'],
                queryFn: () =>
                    axios
                        .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${2}/rankings`)
                        .then((res) => res.data),
            },
            {
                queryKey: ['FB'],
                queryFn: () =>
                    axios
                        .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${3}/rankings`)
                        .then((res) => res.data),
            },
            {
                queryKey: ['FC'],
                queryFn: () =>
                    axios
                        .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${4}/rankings`)
                        .then((res) => res.data),
            },
            {
                queryKey: ['FD'],
                queryFn: () =>
                    axios
                        .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${5}/rankings`)
                        .then((res) => res.data),
            }
        ],
    });

    return (
        <>
            {
                router?.query?.slug === 'maschile' &&
                // <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-x-6'>
                //     <TableProva key={1} data={MA.data} girone={'GIRONE A - MASCHILE'} param={'MA'} />
                //     <TableProva key={2} data={MB.data} girone={'GIRONE B - MASCHILE'} param={'MB'} />
                //     <TableProva key={3} data={MC.data} girone={'GIRONE C - MASCHILE'} param={'MC'} />
                //     <TableProva key={4} data={MD.data} girone={'GIRONE D - MASCHILE'} param={'MD'} />
                //     <TableProva key={5} data={ME.data} girone={'GIRONE E - MASCHILE'} param={'ME'} />
                //     <TableProva key={6} data={MF.data} girone={'GIRONE F - MASCHILE'} param={'MF'} />
                //     <TableProva key={7} data={MR1.data} girone={'GIRONE R1 - MASCHILE'} param={'MR1'} />
                //     <TableProva key={8} data={MR2.data} girone={'GIRONE R2 - MASCHILE'} param={'MR2'} />
                // </div>
                <div className='lg:w-2/3 mx-auto'>
                    <UniqueTable data={MA.data} />
                </div>
            }

            {
                router?.query?.slug === 'femminile' &&
                <div>

                    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-x-6'>
                        <TableProva data={FA.data} girone={'GIRONE A - FEMMINILE'} param={2} />
                        <TableProva data={FB.data} girone={'GIRONE B - FEMMINILE'} param={3} />
                        <TableProva data={FC.data} girone={'GIRONE C - FEMMINILE'} param={4} />
                        <TableProva data={FD.data} girone={'GIRONE D - FEMMINILE'} param={5} />
                    </div>
                    <p className='text-[10px] font-semibold'>Pt=punti, W=Vittorie, Gf=Goal fatti, Gs=Goal subiti.</p>
                </div>
            }

        </>

    )
}
