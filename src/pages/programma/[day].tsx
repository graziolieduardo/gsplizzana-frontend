import useSchedules from '@/src/api/schedule/useSchedules';
import { Button } from '@/src/components/common/Button';
import DetaglioPartita from '@/src/components/common/DetaglioPartita';
import Programma from '@/src/components/common/Programma';
import { Title } from '@/src/components/common/Title';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// export const getServerSideProps = async (context: any) => {
//     let day: string;

//     switch (context.params.day) {
//         case 'giovedì': day = '2023-08-10';
//             break;
//         case 'venerdì': day = '2023-08-11';
//             break;
//         case 'sabato': day = '2023-08-12';
//             break;
//         case 'domenica': day = '2023-08-13';
//             break;
//         default:
//             day = '2023-08-10';
//     }

//     const res = await axios.get(`${process.env.NEXT_PUBLIC_GAMESHARD_ENDPOINT}schedule?day=${day}`);
//     const schedule = res.data;

//     return { props: { schedule } }
// }

enum Days {
    'giovedì' = '10.08',
    'venerdì' = '11.08',
    'sabato' = '12.08',
    'domenica' = '13.08',
}

export default function index() {

    const [nextDay, setNextDay] = useState<string | null>(null);
    const [prevDay, setPrevDay] = useState<string | null>(null);

    const router = useRouter();
    const { day } = router.query;

    // console.log(day);


    const { schedule, isFetching, isLoading } = useSchedules({ day });

    // console.log(schedule);


    useEffect(() => {
        if (day === 'giovedì') {
            setNextDay('venerdì');
            setPrevDay(null);
        } else if (day === 'venerdì') {
            setNextDay('sabato');
            setPrevDay('giovedì');
        } else if (day === 'sabato') {
            setNextDay('domenica');
            setPrevDay('venerdì');
        } else if (day === 'domenica') {
            setNextDay(null);
            setPrevDay('sabato');
        }
    }, [day]);

    return (
        <>
            {/* page title  */}
            <div className="flex gap-x-2 py-24 max-w-container 2xl:max-w-container-xl mx-auto px-4">
                <div className=" lg:w-1/2 mx-auto">
                    <Title variant={Title.variant.primary} > Scopri i <span className="text-primary">gironi</span> del torneo</Title>
                    <p className='my-8'>E anche quest’anno per il torneo maschile ci sono 8 giorni da 4 squadre ciascuno e per il torneo femminile ci sono 4 gironi da 4 squadre. In aggiunta è stato organizzato anche un girone Rookie per agevolare le squadre new entry.</p>
                    <Button link={'#agenda'} variant={Button.variant.primary} className='p-3'>Orari partite</Button>
                </div>
                <div className=" hidden lg:block lg:w-1/2 h-[500px] bg-gray-200"></div>

            </div>

            {/* programma section */}
            <Programma />

            {/* agenda section */}
            <section id='agenda' className='max-w-container 2xl:max-w-container-xl mx-auto px-4'>
                <div className='py-8'>
                    <h2 className='text-2xl font-bold'>Agenda partite</h2>
                    <h2 className='text-2xl font-bold'>Torneo Calcioshplash</h2>

                    <div id='scrollContainer' className='flex overflow-auto'>

                        {/* slider */}
                        <div className='min-w-full px-1'>
                            <div className='flex justify-between items-center mt-8 pb-3 border-b-2'>

                                {/* prev button */}
                                {/* <Link className='border-2 border-primary-dark rounded' href={`/programma/${prevDay}`} shallow={true}>
                                    <img className='w-8 cursor-pointer' src="/static/chevron-left.svg" alt="" />
                                </Link> */}
                                {/* <div onClick={() => { router.push(`/programma/${prevDay}`, undefined, { shallow: true }) }}> */}
                                <button className={`${prevDay === null ? 'cursor-not-allowed' : ''} border-2 border-primary-dark rounded`} disabled={prevDay === null ? true : false} onClick={() => { router.push(`/programma/${prevDay}`, undefined, { shallow: true }) }}>
                                    <img className='w-8 cursor-pointer' src="/static/chevron-left.svg" alt="" />
                                </button>
                                {/* </div> */}

                                {/* middle text for the active item */}
                                <div className=' text-center capitalize flex items-baseline gap-x-4'>
                                    <h2 className='text-2xl font-semibold'>{day}</h2>
                                    {/* <span>{Days.day as keyof Days }</span> */}
                                </div>

                                {/* next button */}
                                <button className={`${nextDay === null ? 'cursor-not-allowed' : ''} border-2 border-primary-dark rounded`} disabled={nextDay === null ? true : false} onClick={() => { router.push(`/programma/${nextDay}`, undefined, { shallow: true }) }}>
                                    {/* <button className={`${nextDay === null ? 'cursor-not-allowed' : ''} border-2 border-primary-dark rounded ${nextDay === null ? 'border-gray-300' : ''}`} disabled={nextDay === null ? true : false} onClick={() => { router.push(`/programma/${nextDay}`, undefined, { shallow: true }) }}> */}
                                    <img className='w-8 cursor-pointer text-gray-300' src="/static/chevron-right.svg" alt="" />
                                </button>
                            </div>

                            {schedule && schedule?.map((match: any) => {
                                return (
                                    <div key={match.id} className='mt-8'>
                                        <DetaglioPartita match={match} />
                                    </div>
                                )
                            })}


                            {isLoading && <Skeleton count={5} className='mt-8' height={70} />}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
