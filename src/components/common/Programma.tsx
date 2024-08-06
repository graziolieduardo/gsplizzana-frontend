import { Title } from "./Title";


export default function Programma() {
    const program: any = {
        mercoledì: [
            {
                weekDay: 'mercoledì',
                day: '14.08'
            },
            {
                title: 'Inizio torneo calciosplash️',
                time: '16.00',
                important: true,
                highlight: true
            },
            // {
            //     title: 'Inizio Beer Pong',
            //     time: '17.00',
            //     important: false,
            //     highlight: false
            // },
            {
                title: 'Pausa cena',
                time: '20.00',
                important: false,
                highlight: false
            },
            {
                title: 'Desva',
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
            // {
            //     title: 'Fine Beer Pong',
            //     time: '23.00',
            //     important: false,
            //     highlight: false
            // },
            {
                title: 'Fine partite',
                time: '24.00',
                important: false,
                highlight: false
            },
            {
                title: 'Pablo Norex',
                time: '00.20',
                important: false,
                highlight: true
            },
            {
                title: 'Villa People',
                time: '00.40',
                important: false,
                highlight: true
            },
            {
                title: 'Chiusura',
                time: '1.30',
                important: false,
                highlight: true
            }
        ],
        giovedì: [
            {
                weekDay: 'giovedì',
                day: '15.08'
            },
            {
                title: 'Inizio partite',
                time: '15.00',
                important: false,
                highlight: false
            },
            // {
            //     title: 'Inizio Beer Pong',
            //     time: '17.00',
            //     important: false,
            //     highlight: false
            // },
            {
                title: 'Pausa cena',
                time: '20.00',
                important: false,
                highlight: false
            },
            {
                title: 'Gara alette',
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
                title: 'Fine partite',
                time: '24.00',
                important: false,
                highlight: false
            },
            // {
            //     title: 'Fine Beer Pong',
            //     time: '23.00',
            //     important: false,
            //     highlight: false
            // },
            {
                title: 'Karaoke',
                time: '00.20',
                important: false,
                highlight: true
            },
            {
                title: 'Chiusura',
                time: '1.30',
                important: false,
                highlight: true
            }
        ],
        venerdì: [
            {
                weekDay: 'venerdì',
                day: '16.08'
            },
            {
                title: 'Inizio partite',
                time: '16.00',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa cena',
                time: '20.00',
                important: false,
                highlight: false
            },
            {
                title: 'Bao di sera',
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
            // {
            //     title: 'Pausa cena + Gremps',
            //     time: '20.00',
            //     important: false,
            //     highlight: true
            // },
            // {
            //     title: 'Ripresa partite',
            //     time: '21.00',
            //     important: false,
            //     highlight: false
            // },
            {
                title: 'Fine partite',
                time: '22.40',
                important: false,
                highlight: false
            },
            {
                title: 'Super saom league ✨',
                time: '23.00',
                important: true,
                highlight: true
            },
            {
                title: 'Chiusura',
                time: '1.30',
                important: false,
                highlight: true
            }
        ],
        sabato: [
            {
                weekDay: 'sabato',
                day: '17.08'
            },
            {
                title: 'Inizio partite',
                time: '10.00',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa pranzo',
                time: '14.00',
                important: false,
                highlight: false
            },
            {
                title: 'Ripresa partite',
                time: '15.00',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa cena',
                time: '20.00',
                important: false,
                highlight: false
            },
            {
                title: 'GREMPS',
                time: '20.00',
                important: false,
                highlight: true
            },
            {
                title: 'Pausa',
                time: '21.00',
                important: false,
                highlight: false
            },
            {
                title: 'Playoff Maschili',
                time: '21.40',
                important: true,
                highlight: true
            },
            {
                title: 'Fine partite',
                time: '00.20',
                important: false,
                highlight: false
            },
            {
                title: 'Fanum is back - MY8 qP',
                time: '00.20',
                important: false,
                highlight: true
            },
            {
                title: 'Chiusura',
                time: '1.30',
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
                time: '10.00',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa pranzo',
                time: '14.00',
                important: false,
                highlight: false
            },
            {
                title: 'Quarti di finale maschile',
                time: '15.40',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa',
                // title: 'Happy hour orangione',
                time: '17.00',
                important: false,
                highlight: false
            },
            {
                title: 'Semifinali maschile e femminile',
                time: '18.00',
                important: false,
                highlight: false
            },
            {
                title: 'Esibizione ballo Life Rovereto A.S.D',
                time: '19.20',
                important: false,
                highlight: true
            },
            {
                title: 'Pausa',
                time: '20.20',
                important: false,
                highlight: false
            },
            {
                title: 'Terzi e quarti maschile e femminile',
                time: '21.00',
                important: false,
                highlight: false
            },
            // {
            //     title: 'Pausa',
            //     time: '22.00',
            //     important: false,
            //     highlight: false
            // },
            {
                title: 'Finale femminile',
                time: '22.00',
                important: true,
                highlight: true
            },
            {
                title: 'Finale maschile',
                time: '22.30',
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
                title: 'Villa People',
                time: '24.00',
                important: false,
                highlight: true
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
            <div className='max-w-container 2xl:max-w-container-xl mx-auto px-4 py-16'>
                <Title variant={Title.variant.secondary}> Programma 2023</Title>
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
