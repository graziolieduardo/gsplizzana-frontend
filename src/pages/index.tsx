import Link from 'next/link'
import { Button } from '../components/common/Button'
import Table from '../components/common/Table';

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
                        clubName: 'squadra feminile J'
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
        }
    }


    const gironeMaschile = Object.keys(campeonato.maschile);
    const gironeFeminile = Object.keys(campeonato.feminile);

    return (
        <>
            <main>
                {/* jumbotron */}
                <section id='jumbotron' className='bg-campo bg-cover bg-center'>
                    <div className='bg-black/80 pt-80 pb-6 sm:pb-12'>
                        <div className='container mx-auto px-6 '>
                            <h2 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary font-bold'>23&ordf; edizione</h2>
                            <h5 className='text-2xl text-white font-bold mt-3'>Calcio Splash Lizzana</h5>
                            <h5 className='text-2xl text-white font-bold'>Dal 10 al 13 agosto 2023</h5>
                        </div>
                    </div>
                </section>

                {/* register */}
                <section id='register' className=''>
                    <div className="container mx-auto relative ">
                        <div className='flex justify-end'>
                            <img className='opacity-20 md:opacity-100 h-[317px] lg:h-[556px]' src="/static/palla-rete.png" alt="" />
                        </div>
                        {/* CONTENT */}
                        {/* <div className='absolute top-0 left-0 px-6 py-8 md:w-1/2 max-h-72'> */}
                        <div className='absolute h-[317px] lg:h-[556px] top-0 left-0 px-6 md:w-1/2 flex flex-col justify-center'>
                            <h5 className='text-3xl font-bold md:w-2/3'>
                                Il <span className='text-primary'>Mondiale</span> si gioca sul gonfiabile
                            </h5>

                            <p className='my-6 font-light text-secondary'>Sai la differenza tra i mondiali classici e quelli sul sapone? Quelli sul sapone non cambiano luogo ogni 4 anni.</p>

                            {/* <Link className='block rounded-full bg-gradient-to-r from-primary-dark to-primary w-full py-2 mt-8 text-white text-center' href="iscrizioni">Iscriviti</Link> */}
                            <Button variant={Button.variant.primary} link="/iscrizioni">Iscriviti</Button>
                        </div>
                    </div>
                </section>

                {/* table section */}
                <section id='tables'>
                    <div className=" bg-gray-50">

                        <div className='container mx-auto pl-6 py-8'>

                            <h2 className='text-2xl font-semibold mb-4 capitalize'>girone maschile </h2>
                            <div className="flex gap-x-4 overflow-x-auto">

                                {gironeMaschile.map((girone) => (
                                    <div key={girone}>
                                        <Table girone={girone} campeonato={campeonato.maschile} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pl-6 py-8 container mx-auto">

                        <h2 className='text-2xl font-semibold mb-4 capitalize'>girone Feminile </h2>
                        <div className="flex gap-x-4 overflow-x-auto">

                            {gironeFeminile.map((girone) => (

                                <Table key={girone} girone={girone} campeonato={campeonato.feminile} bgColor={'bg-gray-50'} />
                            ))}
                        </div>

                    </div>

                </section>

            </main>
        </>
    )
}
