import useSchedules from '@/src/api/schedule/useSchedules';
import DetaglioPartita_2 from '@/src/components/common/DetaglioPartita_2';
import Programma from '@/src/components/common/Programma';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Index() {
    const [nextDay, setNextDay] = useState<string | null>(null);
    const [prevDay, setPrevDay] = useState<string | null>(null);

    const router = useRouter();
    const { day } = router.query;

    const { schedule, isLoading } = useSchedules({ day });

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
                                        <DetaglioPartita_2 data={match} />
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