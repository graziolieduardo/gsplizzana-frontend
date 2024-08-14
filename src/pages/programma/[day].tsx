import useSchedules from '@/src/api/schedule/useSchedules';
import { Button } from '@/src/components/common/Button';
import DetaglioPartita_2 from '@/src/components/common/DetaglioPartita_2';
import LiveStream from '@/src/components/common/LiveStream';
import Programma from '@/src/components/common/Programma';
import { Title } from '@/src/components/common/Title';
import { isSameDay, startOfDay, subMinutes } from 'date-fns';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Index() {
    const [nextDay, setNextDay] = useState<string | null>(null);
    const [prevDay, setPrevDay] = useState<string | null>(null);
    const [dailyProgram, setDailyProgram] = useState<any>([]);

    const router = useRouter();
    const { day } = router.query;

    const { schedule, isLoading } = useSchedules();

    useEffect(() => {
        if (schedule) {
            if (day === 'mercoledì') {
                setNextDay('giovedì');
                setPrevDay(null);
                setDailyProgram(schedule.filter((match: any) => { return isSameDay(subMinutes(new Date(match.scheduled_at), 1), new Date('2024-08-14')) }));
            }
            else if (day === 'giovedì') {
                setNextDay('venerdì');
                setPrevDay('mercoledì');
                setDailyProgram(schedule.filter((match: any) => { return isSameDay(startOfDay(subMinutes(new Date(match.scheduled_at), 1)), new Date('2024-08-15')) }));
            }
            else if (day === 'venerdì') {
                setNextDay('sabato');
                setPrevDay('giovedì');
                setDailyProgram(schedule.filter((match: any) => { return isSameDay(startOfDay(subMinutes(new Date(match.scheduled_at), 1)), new Date('2024-08-16')) }));
            }
            else if (day === 'sabato') {
                setNextDay(null);
                setPrevDay('venerdì');
                setDailyProgram(schedule.filter((match: any) => { return isSameDay(startOfDay(subMinutes(new Date(match.scheduled_at), 1)), new Date('2024-08-17')) }));
            }
        }
    }, [schedule, day]);

    return (
        <>
            {/* page title  */}
            <div className='max-w-container 2xl:max-w-container-xl mx-auto px-6'>

                <div className="flex gap-x-2 ">
                    <div className="md:w-1/2 pt-10 pb-10">
                        <Title variant={Title.variant.primary}>Scopri il <span className="text-primary">programma</span> completo</Title>
                        <p className="mt-8 font-light text-text-subtle">Non perderti le partite, rimani aggiornato oppure seguile in diretta.</p>
                    </div>
                    {/* <div className="hidden md:block md:w-1/2 h-[500px] bg-gray-200"></div> */}
                </div>

                <div className='mb-6'>
                    <Button className='p-2' link={'#agenda'} variant={Button.variant.primary}>Orario partite</Button>
                </div>
            </div>

            {/* programma section */}
            <Programma />

            {/* agenda section */}
            <section id='agenda' className='max-w-container 2xl:max-w-container-xl mx-auto px-6'>
                <div className='py-8'>
                    <h2 className='text-2xl font-bold'>Agenda partite</h2>
                    <h2 className='text-2xl font-bold'>Torneo Calcioshplash</h2>

                    <div id='scrollContainer' className='flex overflow-auto'>
                        {/* slider */}
                        <div className='min-w-full'>
                            <div className='flex justify-between items-center mt-8 pb-3 border-b-2'>

                                {/* prev button */}
                                {/* <Link className='border-2 border-primary-dark rounded' href={`/programma/${prevDay}`} shallow={true}>
                                    <img className='w-8 cursor-pointer' src="/static/chevron-left.svg" alt="" />
                                </Link> */}
                                {/* <div onClick={() => { router.push(`/programma/${prevDay}`, undefined, { shallow: true }) }}> */}
                                <button className={`${prevDay === null ? 'cursor-not-allowed' : 'cursor-pointer'} border-2 border-primary-dark rounded`} disabled={prevDay === null ? true : false} onClick={() => { router.push(`/programma/${prevDay}`, undefined, { shallow: true }) }}>
                                    <img className='w-8' src="/static/chevron-left.svg" alt="" />
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

                            {dailyProgram && dailyProgram?.map((match: any) => {
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

            <LiveStream />
        </>
    )
}
