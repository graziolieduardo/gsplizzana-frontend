import DetaglioPartita from '@/src/components/common/DetaglioPartita';
import LiveStream from '@/src/components/common/LiveStream';
import useSingleMatch from '@/src/api/matches/useSingleMatch'
import { Title } from '@/src/components/common/Title';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function index() {

    const router = useRouter();
    const { id } = router.query;

    const { match, isLoading } = useSingleMatch(id) 
    const timer = '03:50';

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

    // useEffect(() => {
    //     match && console.log(match.data);
        
    // }, [match])

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
                        (match && !isLoading ) && <div>
                            <div className={`flex text-center justify-between items-center py-12 px-[4%] mb-4 min-h-[70px] rounded bg-gradient-to-r from-primary-dark/40 to-primary/40 border-2 border-primary-dark shadow-[0_2px_8px_rgba(0,0,0,0.25) `}>

                                {/* Home team */}
                                <div className='font-semibold  min-w-[40%]'>{match.home_team && match.home_team.name}</div>

                                {/* placar */}
                                <div className="text-center min-w-[20%]">
                                    <div className="text-xs font-semibold text-primary-dark">h </div>
                                    {
                                        <div className='font-bold text-xl'>
                                            <span>{match.home_team && match.home_team.score}</span>
                                            <span> - </span>
                                            <span>{match.away_team && match.away_team.score}</span>
                                        </div>
                                    }
                                </div>

                                {/* guest team */}
                                <div className='font-semibold  min-w-[40%]'>{match.away_team && match.away_team.name}</div>
                            </div>
                        </div>
                    }

                    {/* card and goals */}
                    
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