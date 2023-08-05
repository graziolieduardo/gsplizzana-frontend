import { Title } from "./Title";


export default function Programma() {
    const program: any = {
        giovedi: [
            {
                weekDay: 'giovedì',
                day: '13.08'
            },
            {
                title: 'Cerimonia di apertura',
                time: '15.30',
                important: true,
                highlight: true
            },
            {
                title: 'Inizio torneo calcio splash️',
                time: '16.00',
                important: false,
                highlight: false
            },
            {
                title: 'Inizio torneo beer pong ',
                time: '16.30',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa',
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
                title: 'Fine partita',
                time: '23.40',
                important: false,
                highlight: false
            },
            {
                title: 'Chiusura',
                time: '01.30',
                important: false,
                highlight: false
            },
        ],
        venerdi: [
            {
                weekDay: 'venerdì',
                day: '14.08'
            },
            {
                title: 'Inizio partite calcio splash e beer pong',
                time: '16.00',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa',
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
                title: 'Fine partite',
                time: '22.40',
                important: false,
                highlight: false
            },
            {
                title: 'Super saom show ✨ ',
                time: '23.40',
                important: true,
                highlight: true
            },
            {
                title: 'chiusura',
                time: '01.30',
                important: false,
                highlight: false
            },
        ],
        sabato: [
            {
                weekDay: 'sabato',
                day: '15.08'
            },
            {
                title: 'Ripresa partite',
                time: '21.00',
                important: false,
                highlight: false
            },
            {
                title: 'Fine partite',
                time: '22.40',
                important: false,
                highlight: false
            },
            {
                title: 'Super saom show ✨ ',
                time: '23.40',
                important: true,
                highlight: true
            },
            {
                title: 'chiusura',
                time: '01.30',
                important: false,
                highlight: false
            },
            {
                title: 'Super saom show ✨ ',
                time: '23.40',
                important: false,
                highlight: false
            },
            {
                title: 'chiusura',
                time: '01.30',
                important: false,
                highlight: true
            },
            {
                title: 'Super saom show ✨ ',
                time: '23.40',
                important: false,
                highlight: false
            },
            {
                title: 'chiusura',
                time: '01.30',
                important: false,
                highlight: false
            },
            {
                title: 'Super saom show ✨ ',
                time: '23.40',
                important: false,
                highlight: true
            },
            {
                title: 'chiusura',
                time: '01.30',
                important: false,
                highlight: false
            },
        ],
        domenica: [
            {
                weekDay: 'domenica',
                day: '16.08'
            },
            {
                title: 'Inizio partite calcio splash e beer pong',
                time: '16.00',
                important: false,
                highlight: false
            },
            {
                title: 'Pausa',
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
        ],
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
                                    <div key={i} className={`p-3 rounded flex gap-x-4 text-sm sm:text-base sm:gap-x-8 ${event.highlight ? 'bg-bg-primary font-semibold' : null} ${event.important ? 'text-primary' : null}`}>
                                        <p>{event.time}</p><p>{event.title}</p>
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
