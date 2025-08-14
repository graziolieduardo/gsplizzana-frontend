import { Title } from "./Title";


export default function Programma() {
    const program: any = {
        giovedì: [
            {
                weekDay: 'giovedì',
                day: '14.08'
            },
            {
                title: 'Inizio partite',
                time: '16.00',
                important: false,
                highlight: false
            },
            {
                title: 'Beer Pong',
                time: '19.00',
                important: false,
                highlight: false
            },
            {
                title: 'LEDWALL SHOW - Pera',
                time: '20.00',
                important: false,
                highlight: true
            },
            {
                title: 'LEDWALL SHOW - Carpa',
                time: '20.30',
                important: false,
                highlight: true
            },
            {
                title: 'Ripresa partite',
                time: '21.00',
                important: false,
                highlight: false
            },
            {
                title: 'Dj set - Cellar Door',
                time: '23.00',
                important: false,
                highlight: false
            },
            {
                title: 'Dj cap',
                time: '00.00',
                important: false,
                highlight: false
            },
            {
                title: 'Chiusura',
                time: '01.00',
                important: false,
                highlight: true
            }
        ],
        venerdì: [
            {
                weekDay: 'venerdì',
                day: '15.08'
            },
            {
                title: 'Inizio partite',
                time: '11.00',
                important: false,
                highlight: false
            },
            {
                title: 'Beer Pong',
                time: '19.00',
                important: false,
                highlight: false
            },
            {
                title: 'LEDWALL SHOW - Gremps',
                time: '20.00',
                important: false,
                highlight: true
            },
            {
                title: 'Ripresa partite',
                time: '21.00',
                important: false,
                highlight: false
            },
            {
                title: 'Super saom show ✨',
                time: '23.00',
                important: true,
                highlight: true
            },
            {
                title: 'Chiusura',
                time: '01.00',
                important: false,
                highlight: true
            }
        ],
        sabato: [
            {
                weekDay: 'sabato',
                day: '16.08'
            },
            {
                title: 'Inizio partite',
                time: '12.20',
                important: false,
                highlight: false
            },
            {
                title: 'Beer Pong',
                time: '19.00',
                important: false,
                highlight: false
            },
            {
                title: 'LEDWALL SHOW - Grabbbrielll',
                time: '20.00',
                important: false,
                highlight: true
            },
            {
                title: 'LEDWALL SHOW - Hålo',
                time: '20.30',
                important: false,
                highlight: true
            },
            {
                title: 'Ripresa partite',
                time: '21.00',
                important: false,
                highlight: false
            },
            {
                title: 'Dj Ema',
                time: '23.00',
                important: false,
                highlight: false
            },
            {
                title: 'Dj My8',
                time: '00.00',
                important: false,
                highlight: false
            },
            {
                title: 'Chiusura',
                time: '1.00',
                important: false,
                highlight: true
            }
        ],
        domenica: [
            {
                weekDay: 'domenica',
                day: '18.08'
            },
            {
                title: 'Ottavi e Quarti di finale maschile e femminile',
                time: '12.00',
                important: false,
                highlight: false
            },
            {
                title: 'Quarti di finale maschile',
                time: '16.40',
                important: false,
                highlight: false
            },
            {
                title: 'Semifinali maschile e femminile',
                time: '18.40',
                important: false,
                highlight: false
            },
            {
                title: 'Life Rovereto A.S.D',
                time: '20.00',
                important: false,
                highlight: true
            },
            {
                title: 'Terzi e quarti maschile e femminile',
                time: '20.40',
                important: false,
                highlight: false
            },
            {
                title: 'Finale femminile',
                time: '21.40',
                important: true,
                highlight: true
            },
            {
                title: 'Finale maschile',
                time: '22.10',
                important: true,
                highlight: true
            },
            {
                title: 'Premiazioni',
                time: '23.00',
                important: false,
                highlight: false,
                bold: true
            },
            {
                title: 'Chiusura',
                time: '1.30',
                important: false,
                highlight: true
            }
        ]
    }

    const dayProgram = Object.keys(program);

    return (
        <section id='program' className='bg-bg-primary'>
            <div className='max-w-container 2xl:max-w-container-xl mx-auto px-6 py-16'>
                <Title variant={Title.variant.secondary}>
                    Programma 2025
                </Title>
                <div className='flex gap-x-4 mt-8 overflow-x-auto'>

                    {dayProgram.map((day, i) => (
                        <div key={i} className='bg-white min-w-[330px] sm:min-w-[430px] p-4 border rounded'>
                            <div className='tex-2xl font-bold uppercase py-2'>
                                {program[day][0].weekDay}
                            </div>
                            {program[day].map((event: any, i: number) => {
                                if (i === 0) {
                                    return null
                                }
                                return (
                                    <div key={i} className={`p-3 flex gap-x-4 text-sm sm:text-base sm:gap-x-8 ${event.highlight ? 'bg-bg-primary font-semibold' : null} ${event.important ? 'text-primary' : null}`}>
                                        <p className="w-[40px]">{event.time}</p><p>{event.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>
    )
}
