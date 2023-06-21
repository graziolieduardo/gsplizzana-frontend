import DetaglioPartita from '@/src/components/common/DetaglioPartita'
import Programma from '@/src/components/common/Programma'
import { useState } from 'react'

export default function index() {
    const matches: any = {

        giovedi: [

            {
                weekday: 'giovedì',
                day: '13.08'
            },
            {
                id: 1,
                home: 'squadra 1',
                guest: 'squadra 3',
                result: ' 0 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 2,
                home: 'squadra 2',
                guest: 'squadra 4',
                result: ' 2 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 3,
                home: 'squadra 3',
                guest: 'squadra 2',
                result: ' 4 x 1',
                isDone: false,
                live: true,
                time: '14.40'
            },
            {
                id: 4,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 5,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 6,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 7,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 8,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 9,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 10,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
        ],
        venerdi: [
            {
                weekday: 'venerdì',
                day: '14.08'
            },
            {
                id: 1,
                home: 'squadra 4',
                guest: 'squadra 3',
                result: ' 0 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 2,
                home: 'squadra 2',
                guest: 'squadra 4',
                result: ' 2 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 3,
                home: 'squadra 3',
                guest: 'squadra 2',
                result: ' 4 x 1',
                isDone: false,
                live: true,
                time: '14.40'
            },
            {
                id: 4,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: '1 x 1',
                isDone: false,
                live: true,
                time: '14.40'
            },
            {
                id: 5,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 6,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 7,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 8,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 9,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 10,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
        ],
        sabato: [

            {
                weekday: 'sabato',
                day: '15.08'
            },
            {
                id: 1,
                home: 'squadra 1',
                guest: 'squadra 3',
                result: ' 0 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 2,
                home: 'squadra 2',
                guest: 'squadra 4',
                result: ' 2 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 3,
                home: 'squadra 3',
                guest: 'squadra 2',
                result: ' 4 x 1',
                isDone: false,
                live: true,
                time: '14.40'
            },
            {
                id: 4,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 5,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 6,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 7,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 8,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 9,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 10,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
        ],
        domenica: [

            {
                weekday: 'domenica',
                day: '16.08'
            },
            {
                id: 1,
                home: 'squadra 1',
                guest: 'squadra 3',
                result: ' 0 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 2,
                home: 'squadra 2',
                guest: 'squadra 4',
                result: ' 2 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 3,
                home: 'squadra 3',
                guest: 'squadra 2',
                result: ' 4 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 4,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: '3 x 1',
                isDone: true,
                live: false,
                time: '14.40'
            },
            {
                id: 5,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: '0 x 0',
                isDone: false,
                live: true,
                time: '14.40'
            },
            {
                id: 6,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 7,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 8,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 9,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
            {
                id: 10,
                home: 'squadra 4',
                guest: 'squadra 1',
                result: false,
                isDone: false,
                live: false,
                time: '14.40'
            },
        ],
    }

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
            <Programma />

            {/* agenda section */}
            <section id='agenda' className='max-w-container 2xl:max-w-container-xl mx-auto'>
                <div className='py-8'>
                    <h2 className='text-2xl font-bold'>Agenda partite</h2>
                    <h2 className='text-2xl font-bold'>Torneo Calcioshplash</h2>

                    <div id='scrollContainer' className='flex overflow-auto'>

                        <div className='min-w-full px-1'>
                            <div className='flex justify-between items-center mt-8 pb-3 border-b-2'>
                                <div className='border-2 border-primary-dark rounded' onClick={() => { handlePreviousDay() }}> <img className='w-8' src="/static/chevron-left.svg" alt="" /></div>
                                <div className=' text-center capitalize flex items-baseline gap-x-4'>
                                    <h2 className='text-2xl font-semibold'>{currentMatches[0].weekday}</h2>
                                    <span>{currentMatches[0].day}</span>
                                </div>
                                <div className='border-2 border-primary-dark rounded' onClick={() => { handleNextDay() }}><img className='w-8' src="/static/chevron-right.svg" alt="" /></div>
                            </div>
                            {currentMatches.map((match: any, i: number) => {
                                if (i === 0) {
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
