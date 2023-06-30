import DetaglioPartita from '@/src/components/common/DetaglioPartita';
import LiveStream from '@/src/components/common/LiveStream';
import { Title } from '@/src/components/common/Title';
import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();
    const { id } = router.query;
    const timer = '03:50';
    const matches: any = [
        {
            id: 1,
            home: 'squadra 1',
            guest: 'squadra 3',
            result: {
                home: 1,
                guest: 2
            },
            isDone: true,
            live: false,
            time: '14.40',
            cards: {
                yellow: {
                    home: ['Dut', 'Dut'],
                    guest: ['leo']
                },

                red: {
                    home: ['Dut'],
                    guest: []
                }
            }
        },
        {
            id: 2,
            home: 'squadra 2',
            guest: 'squadra 4',
            result: {
                home: 1,
                guest: 3
            },
            isDone: true,
            live: false,
            time: '14.40',
            cards: {
                yellow: {
                    home: ['Dut', 'Dut'],
                    guest: ['leo']
                },

                red: {
                    home: ['Dut'],
                    guest: []
                }
            }
        },
        {
            id: 3,
            home: 'squadra 3',
            guest: 'squadra 2',
            result: {
                home: 3,
                guest: 2
            },
            isDone: false,
            live: true,
            time: '14.40',
            cards: {
                yellow: {
                    home: ['Dut', 'Dut'],
                    guest: ['leo']
                },

                red: {
                    home: ['Dut'],
                    guest: []
                }
            }
        },
        {
            id: 4,
            home: 'squadra 4',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.40',
            cards: false
        },
        {
            id: 5,
            home: 'squadra 5',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.40',
            cards: false
        },
        {
            id: 6,
            home: 'squadra 6',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.40',
            cards: false
        },
        {
            id: 7,
            home: 'squadra 4',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.40',
            cards: false
        },
        {
            id: 8,
            home: 'squadra 4',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.40',
            cards: false
        },
        {
            id: 9,
            home: 'squadra 4',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.40',
            cards: false
        },
        {
            id: 10,
            home: 'squadra 4',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.40',
            cards: false
        },
    ];
    const nextMatches: any = [

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
    ];
    // to fake query with id 
    const pageId = parseInt(id as string) - 1;

    return (
        <>
            {/* dettagio partita component*/}
            <section id='dettaglioPartita'>

                {/* timer */}
                <div className='bg-gradient-to-r from-primary-dark to-primary py-8 flex justify-center items-center'>
                    <div className='text-center'>
                        <p className='text-white font-semibold'>Timer partita in corso</p>
                        <div>
                            {timer}
                        </div>
                    </div>
                </div>

                {/* dettagli partita */}
                <div className='max-w-container 2xl:max-w-container-xl mx-auto px-4 py-16'>
                    {
                        (pageId === 0 || pageId) && <div>
                            <div className={`flex text-center justify-between items-center py-12 px-[4%] mb-4 min-h-[70px] rounded bg-gradient-to-r from-primary-dark/40 to-primary/40 border-2 border-primary-dark shadow-[0_2px_8px_rgba(0,0,0,0.25) `}>

                                {/* Home team */}
                                <div className='font-semibold  min-w-[40%]'>{matches[pageId].home}</div>

                                {/* placar */}
                                <div className="text-center min-w-[20%]">
                                    <div className="text-xs font-semibold text-primary-dark">h {matches[pageId].time}</div>
                                    {
                                        matches[pageId].result && <div className='font-bold text-xl'>
                                            <span>{matches[pageId].result.home}</span>
                                            <span> - </span>
                                            <span>{matches[pageId].result.guest}</span>
                                        </div>
                                    }
                                </div>

                                {/* guest team */}
                                <div className='font-semibold  min-w-[40%]'>{matches[pageId].guest}</div>
                            </div>
                        </div>
                    }

                    {/* tentativa de advinhar os dados dos cartoes xD da implementar melhor com gols e cartoes vermelhos e tudo mais */}
                    {/* card and goals */}
                    {(pageId === 0 || pageId) && <div className='flex justify-center divide-x mt-8'>

                        {/*home yellow cards */}
                        <div className='px-16 text-sm'>{matches[pageId].cards.yellow.home.map((yellow: any, i: number) => (
                            <div key={i} className='flex items-center gap-x-1'>
                                {yellow}
                                <img className='h-[12px]' src="/static/yellow-card.png" alt="" />
                            </div>
                        ))}</div>

                        {/* guest yellow cards */}
                        <div className='px-16 text-sm'>{matches[pageId].cards.yellow.guest.map((yellow: any, i: number) => (
                            <div key={i} className='flex items-center gap-x-1'>
                                {yellow}
                                <img className='h-[12px]' src="/static/yellow-card.png" alt="" />
                            </div>
                        ))}</div>


                    </div>}
                </div>

                <div className='bg-bg-secondary py-16'>
                    <div className='max-w-container 2xl:max-w-container-xl mx-auto px-4'>
                        <Title variant={Title.variant.tertiary}> Dettagli match</Title>
                        <p className='mt-8 lg:w-1/2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente tempora debitis ipsa ipsum eligendi officiis! Dolores facilis, repudiandae velit nulla minima provident officiis vero autem aut repellat rem doloribus.</p>
                    </div>
                </div>

            </section>

            {/* livestream */}
            <LiveStream />

            {/* next matches */}
            <section id='nextMatches' className='max-w-container 2xl:max-w-container-xl mx-auto px-4 py-8'>

                <h2 className='text-2xl font-bold mb-2'>Prossime Partite</h2>
                {nextMatches.map((match: any) => (

                    <DetaglioPartita key={match.id} match={match} />
                ))}
            </section>
        </>
    )
}