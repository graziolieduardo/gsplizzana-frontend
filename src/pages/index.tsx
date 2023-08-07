import { Button } from '../components/common/Button'
import TableHome from '../components/common/TableHome';
import LiveStream from '../components/common/LiveStream';
import Programma from '../components/common/Programma';
import { Title } from '../components/common/Title';

export default function Home() {

    const campeonato: any = {
        maschile: {

            "Girone A": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra A'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra C'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra B'
                    },
                    matches: 5,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra D'
                    },
                    matches: 5,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],

            "Girone B": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra E'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra F'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra G'
                    },
                    matches: 3,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra H'
                    },
                    matches: 3,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],

            "Girone C": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra I muito grande'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra J'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra K'
                    },
                    matches: 3,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra L'
                    },
                    matches: 3,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],

            "Girone D": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra A'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra C'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra B'
                    },
                    matches: 5,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra D'
                    },
                    matches: 5,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],

            "Girone E": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra E'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra F'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra G'
                    },
                    matches: 3,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra H'
                    },
                    matches: 3,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],

            "Girone F": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra I muito grande'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra J'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra K'
                    },
                    matches: 3,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra L'
                    },
                    matches: 3,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],


        },

        feminile: {

            "Girone E": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra feminile A'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra feminile C'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra feminile B'
                    },
                    matches: 5,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra feminile D'
                    },
                    matches: 5,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],

            "Girone B": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra feminile E'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra feminile F'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra feminile G'
                    },
                    matches: 3,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra feminile H'
                    },
                    matches: 3,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],

            "Girone C": [

                {
                    position: 1,
                    points: 6,
                    club: {
                        id: 1,
                        clubName: 'squadra feminile I'
                    },
                    matches: 3,
                    win: 2,
                    draw: 0,
                    lose: 1
                },
                {
                    position: 2,
                    points: 4,
                    club: {
                        id: 3,
                        clubName: 'squadra feminile molto lungo'
                    },
                    matches: 3,
                    win: 1,
                    draw: 1,
                    lose: 1
                },
                {
                    position: 3,
                    points: 2,
                    club: {
                        id: 2,
                        clubName: 'squadra feminile K'
                    },
                    matches: 3,
                    win: 0,
                    draw: 2,
                    lose: 1
                },
                {
                    position: 4,
                    points: 1,
                    club: {
                        id: 4,
                        clubName: 'squadra L'
                    },
                    matches: 3,
                    win: 0,
                    draw: 1,
                    lose: 2
                },
            ],
        },
    }

    const gironeMaschile = Object.keys(campeonato.maschile);
    const gironeFeminile = Object.keys(campeonato.feminile);

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

                    <div className="flex gap-x-4 overflow-x-auto mt-8">

                        {gironeMaschile.map((girone) => (
                            <div key={girone}>
                                <TableHome girone={girone} campeonato={campeonato.maschile} />
                            </div>
                        ))}
                    </div>
                    <p className='text-xs mt-2 mb-8'>Partite giocate, differenza reti e <span className='font-semibold'>punti</span>.</p>

                    <div className=''>
                        <div className='z-10 relative'>

                            <Button variant={Button.variant.secondary} link={'/gironi/maschile'} bg={'bg-bg-primary'}> Dettagli gironi maschile</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Female table section */}
            <section id='female-table'>

                <div className="max-w-container 2xl:max-w-container-xl mx-auto pl-4 py-16">

                    <Title variant={Title.variant.secondary}> Gironii Feminile</Title>

                    <div className="flex gap-x-4 overflow-x-auto mt-8">

                        {gironeFeminile.map((girone) => (

                            <TableHome key={girone} girone={girone} campeonato={campeonato.feminile} bgColor={'bg-bg-primary'} />
                        ))}
                    </div>

                    <p className='text-xs mt-2 mb-8'>Partite giocate, differenza reti e <span className='font-semibold'>punti</span>.</p>

                    <Button variant={Button.variant.secondary} link={'/gironi/feminile'}> dettagli gironi feminile</Button>
                </div>
            </section>

            <LiveStream />
        </>
    )
}
