import useSchedule from '@/src/api/schedule/useSchedules';
import { Button } from '@/src/components/common/Button';
import DetaglioPartita from '@/src/components/common/DetaglioPartita'
import Programma from '@/src/components/common/Programma'
import { Title } from '@/src/components/common/Title';
import { useState } from 'react'

export default function index() {

    const { schedule, isLoading, isFetching } = useSchedule()

    const matches: any = {

        giovedi: ['giovedì', '10.08'],
        venerdi: ['venerdì', '11.08'],
        sabato: ['sabato', '12.08'],
    }

    !isFetching && schedule.map((day: any) => {

        const eventDate = new Date(day.scheduled_at)
        const weekDay = eventDate.getDay()

        switch (weekDay) {
            case 4:
                matches.giovedi.push(day)
                break;
            case 5:
                matches.venerdi.push(day)
                break;
            case 6:
                matches.sabato.push(day)
                break;
            default:
                break;
        }
    });

    const [currentDay, setCurrentDay] = useState('giovedi');

    const handlePreviousDay = () => {
        const days = Object.keys(matches);
        const currentIndex = days.indexOf(currentDay);
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : days.length - 1;
        setCurrentDay(days[previousIndex]);

    };

    const handleNextDay = () => {
        const days = Object.keys(matches);
        const currentIndex = days.indexOf(currentDay);
        const nextIndex = currentIndex < days.length - 1 ? currentIndex + 1 : 0;
        setCurrentDay(days[nextIndex]);

    };

    const currentMatches = matches[currentDay];

    return (
        <>
            {/* page title  */}
            <div className="flex gap-x-2 py-24 max-w-container 2xl:max-w-container-xl mx-auto px-4">
                <div className=" lg:w-1/2 mx-auto">
                    <Title variant={Title.variant.primary} > Scopri i <span className="text-primary">gironi</span> del torneo</Title>
                    <p className='my-8'>E anche quest’anno per il torneo maschile ci sono 8 giorni da 4 squadre ciascuno e per il torneo femminile ci sono 4 gironi da 4 squadre. In aggiunta è stato organizzato anche un girone Rookie per agevolare le squadre new entry.</p>
                    <Button link={'#agenda'} variant={Button.variant.primary}> Orari partite</Button>
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
                                <div className='border-2 border-primary-dark rounded cursor-pointer' onClick={() => { handlePreviousDay() }}> <img className='w-8' src="/static/chevron-left.svg" alt="" /></div>

                                {/* middle text for the active item */}
                                <div className=' text-center capitalize flex items-baseline gap-x-4'>
                                    <h2 className='text-2xl font-semibold'>{currentMatches[0]}</h2>
                                    <span>{currentMatches[1]}</span>
                                </div>

                                {/* next button */}
                                <div className='border-2 border-primary-dark rounded cursor-pointer' onClick={() => { handleNextDay() }}><img className='w-8' src="/static/chevron-right.svg" alt="" /></div>
                            </div>

                            {currentMatches.map((match: any, i: number) => {
                                if (i === 0 || i === 1) {
                                    return null
                                }

                                return (
                                    <div key={match.id} className='mt-8'>
                                        <DetaglioPartita match={match} />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
