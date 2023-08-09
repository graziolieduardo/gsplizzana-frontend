import { Button } from '../components/common/Button'
import TableHome from '../components/common/TableHome';
import LiveStream from '../components/common/LiveStream';
import Programma from '../components/common/Programma';
import { Title } from '../components/common/Title';
import axios from 'axios';
import { useQueries } from '@tanstack/react-query';

export default function Home() {
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
            {/* jumbotron */}
            <section id='jumbotron' className='bg-campo bg-cover bg-center'>
                <div className='bg-black/80 pt-80 sm:pb-12 '>
                    <div className='max-w-container 2xl:max-w-container-xl mx-auto px-6 text-white'>
                        <div className='w-full md:w-1/2 pb-10'>
                            <Title variant={Title.variant.secondary} > Calciosplash Lizzana 2023</Title>
                            <h5 className='text-[3.7rem] md:text-[5rem] leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary font-bold'>Stay tuned, stay orangione</h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* register */}
            <section id='register'>
                <div className="max-w-container 2xl:max-w-container-xl mx-auto relative ">
                    <div className='flex justify-end'>
                        <img className='opacity-20 md:opacity-100 h-[317px] lg:h-[556px]' src="/static/palla-rete.png" alt="" />
                    </div>
                    {/* CONTENT */}
                    {/* <div className='absolute top-0 left-0 px-6 py-8 md:w-1/2 max-h-72'> */}
                    <div className='absolute h-[317px] lg:h-[556px] top-0 left-0 px-6 md:w-1/2 flex flex-col justify-center'>

                        <Title variant={Title.variant.secondary} >
                            Il <span className='text-primary'>Mondiale</span> si gioca sul gonfiabile
                        </Title>

                        <p className='my-6 font-light text-secondary'>Sai la differenza tra i mondiali classici e quelli sul sapone? Quelli sul sapone non cambiano luogo ogni 4 anni.</p>

                        {/* <Link className='block rounded-full bg-gradient-to-r from-primary-dark to-primary w-full py-2 mt-8 text-white text-center' href="iscrizioni">Iscriviti</Link> */}
                        {/* <Button variant={Button.variant.primary} link="/iscrizioni">Iscriviti</Button> */}
                    </div>
                </div>
            </section>

            {/* Programma */}
            <Programma />

            {/*Male table section */}
            <section id='male-table' className='bg-bg-primary'>

                <div className='max-w-container 2xl:max-w-container-xl mx-auto pl-4 py-16'>
                    <Title variant={Title.variant.secondary}> Gironi Maschile </Title>

                    <div className="flex gap-x-4 overflow-x-auto mt-8 mb-4">
                        <TableHome girone={'GIRONE A'} data={MA.data} bg={'bg-white'} />
                        <TableHome girone={'GIRONE B'} data={MB.data} bg={'bg-white'} />
                        <TableHome girone={'GIRONE C'} data={MC.data} bg={'bg-white'} />
                        <TableHome girone={'GIRONE D'} data={MD.data} bg={'bg-white'} />
                        <TableHome girone={'GIRONE E'} data={ME.data} bg={'bg-white'} />
                        <TableHome girone={'GIRONE F'} data={MF.data} bg={'bg-white'} />
                        <TableHome girone={'GIRONE R1'} data={MR1.data} bg={'bg-white'} />
                        <TableHome girone={'GIRONE R2'} data={MR2.data} bg={'bg-white'} />
                    </div>
                    {/* <p className='text-xs mt-2 mb-8'>Punti, vittorie e <span className='font-semibold'>gol fatti</span>.</p> */}

                    <div className=''>
                        <div className='z-10 relative'>
                            <Button variant={Button.variant.secondary} link={'/gironi/maschile'} bg={'bg-bg-primary'}>Dettagli gironi maschile</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Female table section */}
            <section id='female-table'>

                <div className="max-w-container 2xl:max-w-container-xl mx-auto pl-4 py-16">

                    <Title variant={Title.variant.secondary}> Gironii Femminile</Title>

                    <div className="flex gap-x-4 overflow-x-auto mt-8 mb-4">
                        <TableHome girone={'GIRONE A'} data={FA.data} bg={'bg-bg-primary'} />
                        <TableHome girone={'GIRONE B'} data={FB.data} bg={'bg-bg-primary'} />
                        <TableHome girone={'GIRONE C'} data={FC.data} bg={'bg-bg-primary'} />
                        <TableHome girone={'GIRONE R1'} data={FR1.data} bg={'bg-bg-primary'} />
                    </div>

                    {/* <p className='text-xs mt-2 mb-8'>Partite giocate, differenza reti e <span className='font-semibold'>punti</span>.</p> */}

                    <Button variant={Button.variant.secondary} link={'/gironi/femminile'}>Dettagli gironi femminile</Button>
                </div>
            </section>

            <LiveStream />
        </>
    )
}
