import { Button } from '../components/common/Button'
import TableHome from '../components/common/TableHome';
import LiveStream from '../components/common/LiveStream';
import Programma from '../components/common/Programma';
import { Title } from '../components/common/Title';
import axios from 'axios';
import { useQueries } from '@tanstack/react-query';
import { LiveMatch } from '../components/common/LiveMatch';
import UniqueTable from '../components/common/UniqueTable';

export default function Home() {
    // const [MA, FA, FB, FC, FD] = useQueries({
    //     queries: [
    //         {
    //             queryKey: ['MA'],
    //             queryFn: () =>
    //                 axios
    //                     .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${1}/rankings`)
    //                     .then((res) => res.data),
    //         },
    //         {
    //             queryKey: ['FA'],
    //             queryFn: () =>
    //                 axios
    //                     .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${2}/rankings`)
    //                     .then((res) => res.data),
    //         },
    //         {
    //             queryKey: ['FB'],
    //             queryFn: () =>
    //                 axios
    //                     .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${3}/rankings`)
    //                     .then((res) => res.data),
    //         },
    //         {
    //             queryKey: ['FC'],
    //             queryFn: () =>
    //                 axios
    //                     .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${4}/rankings`)
    //                     .then((res) => res.data),
    //         },
    //         {
    //             queryKey: ['FD'],
    //             queryFn: () =>
    //                 axios
    //                     .get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${5}/rankings`)
    //                     .then((res) => res.data),
    //         }
    //     ],
    // });

    return (
        <>
            {/* jumbotron */}
            <section id='jumbotron' className='bg-campo bg-cover bg-center'>
                <div className='bg-black/80 pt-80'>
                    <div className='max-w-container 2xl:max-w-container-xl mx-auto px-6 text-white'>
                        <div className='w-full md:w-1/2 pb-10'>
                            <Title variant={Title.variant.secondary}>Calciosplash Lizzana 2025</Title>
                            <h5 className='text-[3.7rem] md:text-[5rem] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary font-bold'>Stay tuned, stay orangione</h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id='live-stream'>
                <LiveMatch />
            </section> */}

            {/* register */}
            <section id='register'>
                <div className="max-w-container 2xl:max-w-container-xl mx-auto relative ">
                    <div className='flex justify-end'>
                        <img className='opacity-20 md:opacity-100 h-[317px] lg:h-[556px]' src="/static/palla-rete.png" alt="" />
                    </div>
                    {/* CONTENT */}
                    <div className='absolute h-[317px] lg:h-[556px] top-0 left-0 px-6 md:w-1/2 flex flex-col justify-center'>

                        <Title variant={Title.variant.secondary} >
                            Il <span className='text-primary'>Mondiale</span> si gioca sul gonfiabile
                        </Title>

                        <p className='my-6 font-light text-secondary'>Sai la differenza tra i mondiali classici e quelli sul sapone? Quelli sul sapone non cambiano luogo ogni 4 anni.</p>

                        <Button variant={Button.variant.primary} link="/iscrizioni">Iscriviti</Button>
                    </div>
                </div>
            </section>

            {/* Programma */}
            {/* <Programma /> */}

            {/*Male table section */}
            {/* <section id='male-table' className='bg-bg-primary'>

                <div className='max-w-container 2xl:max-w-container-xl mx-auto pl-4 py-16'>
                    <Title variant={Title.variant.secondary}>Gironi Maschili</Title>

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

                    <div className=''>
                        <div className='z-10 relative'>
                            <Button variant={Button.variant.secondary} link={'/gironi/maschile'} bg={'bg-bg-primary'}>Dettagli gironi maschili</Button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SINGLE TABLE FOR MEN */}
            {/* <div className='max-w-container 2xl:max-w-container-xl mx-auto px-6 py-12' >
                <div className='lg:w-2/3 mx-auto'>
                    <Title variant={Title.variant.secondary}>Gironi Maschili</Title>

                    <div className='h-[292px] overflow-hidden mt-10 rounded-md border-b'>
                        <UniqueTable data={MA.data} />
                    </div>

                    <div className='z-10 relative mt-6'>
                        <Button variant={Button.variant.secondary} link={'/gironi/maschile'} >Vedi Classifica Completa</Button>
                    </div>
                </div>
            </div> */}

            {/* Female table section */}
            {/* <section id='female-table'>
                <div className="max-w-container 2xl:max-w-container-xl mx-auto pl-6 py-12">

                    <Title variant={Title.variant.secondary}>Gironi Femminili</Title>

                    <div className="flex gap-x-4 overflow-x-auto mt-8 mb-4">
                        <TableHome girone={'GIRONE A'} data={FA.data} bg={'bg-bg-primary'} />
                        <TableHome girone={'GIRONE B'} data={FB.data} bg={'bg-bg-primary'} />
                        <TableHome girone={'GIRONE C'} data={FC.data} bg={'bg-bg-primary'} />
                        <TableHome girone={'GIRONE R1'} data={FD.data} bg={'bg-bg-primary'} />
                    </div>

                    <Button variant={Button.variant.secondary} link={'/gironi/femminile'}>Dettagli gironi femminili</Button>
                </div>
            </section> */}

            {/* <LiveStream /> */}
        </>
    )
}
