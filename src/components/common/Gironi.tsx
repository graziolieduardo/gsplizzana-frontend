import TableProva from './TableProva'
import { useQueries } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import UniqueTable from './UniqueTable';

export default function Gironi() {
    const router = useRouter();

    const [MA, MB, MC, MD, ME, MF, MR1, MR2, FA, FB, FC, FR1] = useQueries({
        queries: [
            {
                queryKey: ['MA'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=MA')
                        .then((res) => res.data),
            },
            {
                queryKey: ['MB'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=MB')
                        .then((res) => res.data),
            },
            {
                queryKey: ['MC'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=MC')
                        .then((res) => res.data),
            },
            {
                queryKey: ['MD'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=MD')
                        .then((res) => res.data),
            },
            {
                queryKey: ['ME'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=ME')
                        .then((res) => res.data),
            },
            {
                queryKey: ['MF'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=MF')
                        .then((res) => res.data),
            },
            {
                queryKey: ['MR1'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=MR1')
                        .then((res) => res.data),
            },
            {
                queryKey: ['MR2'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=MR2')
                        .then((res) => res.data),
            },
            {
                queryKey: ['FA'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=FA')
                        .then((res) => res.data),
            },
            {
                queryKey: ['FB'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=FB')
                        .then((res) => res.data),
            },
            {
                queryKey: ['FC'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=FC')
                        .then((res) => res.data),
            },
            {
                queryKey: ['FR1'],
                queryFn: () =>
                    axios
                        .get('https://gsplizzana.internal.devlounge.dev/api/rankings?group=FR1')
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
                    <UniqueTable />
                    <p className='text-[10px] font-semibold'>Pt=punti, W=Vittorie, Gf=Goal fatti, Gs=Goal subiti.</p>
                </div>
            }

            {
                router?.query?.slug === 'femminile' &&
                <div>

                    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-x-6'>
                        <TableProva key={1} data={FA.data} girone={'GIRONE A - FEMMINILE'} param={'FA'} />
                        <TableProva key={2} data={FB.data} girone={'GIRONE B - FEMMINILE'} param={'FB'} />
                        <TableProva key={7} data={FC.data} girone={'GIRONE C - FEMMINILE'} param={'FC'} />
                        <TableProva key={8} data={FR1.data} girone={'GIRONE R1 - FEMMINILE'} param={'FR1'} />
                    </div>
                    <p className='text-[10px] font-semibold'>Pt=punti, W=Vittorie, Gf=Goal fatti, Gs=Goal subiti.</p>
                </div>
            }

        </>

    )
}
