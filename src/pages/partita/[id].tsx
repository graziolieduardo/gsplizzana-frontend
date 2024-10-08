import LiveStream from '@/src/components/common/LiveStream';
import useSingleMatch from '@/src/api/matches/useSingleMatch'
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Index() {
    const router = useRouter();
    const { id, group_id } = router.query;

    //query
    const { match, isLoading, isFetching } = useSingleMatch(id, group_id);

    const currentTime: any = new Date(match?.timer?.current)
    const timer = Math.floor(currentTime / 60);

    const getMatchDate = (match: any) => {
        const date = new Date(match.scheduled_at)
        const hour = date.getHours()
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const matchDate = `${hour}:${minutes}`

        return matchDate
    }

    return (
        <>
            {/* dettagio partita component*/}
            <section id='dettaglioPartita'>

                {/* timer */}
                {
                    (!match?.closed && match?.live) &&
                    <div className='bg-gradient-to-r from-primary-dark to-primary py-8 flex justify-center items-center'>
                        <div className='text-center'>
                            <p className='text-white font-semibold'>Partita in corso</p>
                            <div>
                                {timer}&apos;
                            </div>
                        </div>
                    </div>
                }

                {
                    match?.closed &&
                    <div className='bg-gradient-to-r from-primary-dark to-primary py-8 flex justify-center items-center'>
                        <div className='text-center'>
                            <p className='text-white font-semibold'>Partita terminata</p>
                        </div>
                    </div>
                }

                {
                    (!match?.closed && !match?.live) &&
                    <div className='bg-gradient-to-r from-primary-dark to-primary py-8 flex justify-center items-center'>
                        <div className='text-center'>
                            <p className='text-white font-semibold'>Partita ancora da giocare</p>
                        </div>
                    </div>
                }

                {
                    isLoading &&
                    <div className='px-4 pt-16 mb-36'>
                        <Skeleton count={1} height={200} />
                    </div>
                }

                {/* dettagli partita */}
                {
                    match &&
                    <div className='max-w-container 2xl:max-w-container-xl mx-auto px-4 py-16'>
                        <div key={match?.id}>
                            <div className={`flex justify-between items-center py-12 px-[4%] mb-4 min-h-[70px] rounded bg-gradient-to-r from-primary-dark/40 to-primary/40 border-2 border-primary-dark shadow-[0_2px_8px_rgba(0,0,0,0.25) `}>

                                {/* Home team */}
                                <div className='flex flex-col items-center flex-1'>
                                    <div className='mb-2'>
                                        <img width={70} src={`/static/loghi_squadre/tondi/TEAM/${match?.home_team?.name.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" />
                                        {/* {match?.home_team.name.replace(/\s/g, '')} */}
                                    </div>
                                    <div className='font-semibold text-center'>{match?.home_team?.name}</div>
                                </div>

                                {/* placar */}
                                <div className="text-center min-w-[20%]">
                                    {!isFetching && <div className="text-xs font-semibold text-primary-dark">h {getMatchDate(match)} </div>}

                                    {(match.closed || match.live) &&
                                        <div className='font-bold text-xl'>
                                            <span>{match?.home_team.score}</span>
                                            <span> - </span>
                                            <span>{match?.away_team.score}</span>
                                        </div>
                                    }
                                </div>

                                {/* guest team */}
                                <div className='flex flex-col items-center flex-1'>
                                    <div className='mb-2'>
                                        <img width={70} src={`/static/loghi_squadre/tondi/TEAM/${match?.away_team?.name.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" />
                                        {/* {match?.away_team.name} */}
                                    </div>
                                    <div className='font-semibold text-center'>{match?.away_team?.name}</div>
                                </div>
                            </div>
                        </div>



                        <div className='flex justify-between mt-16'>
                            {/* home team details*/}
                            <div className='border-r flex-1 p-2'>
                                {(match && !isFetching) && match.home_team.players.map((player: any) => {
                                    return (
                                        <div key={player?.id}>

                                            {/* print goals for home team */}
                                            {player?.goals ? <div>
                                                <div className='flex justify-between items-center gap-x-2'>
                                                    <div className='flex-1'>
                                                        <span>{player?.name} </span>
                                                        <span>{player?.surname} </span>
                                                        {/* {player?.nickname && <span>({player?.nickname}) </span>} */}
                                                    </div>

                                                    <div className='flex items-center gap-x-1'>
                                                        <span>{player?.goals}</span>
                                                        <img src="/static/ellipse_24.svg" className='w-5' alt="" />
                                                    </div>
                                                </div>
                                            </div> : null}

                                            {/* print yellowcard for home team */}

                                            {player?.cards?.yellow && <div className='flex justify-between gap-x-1'>
                                                <div>
                                                    <span>{player?.name} </span>
                                                    <span>{player?.surname} </span>
                                                    {/* {player?.nickname && <span>({player?.nickname}) </span>} */}
                                                </div>

                                                <div className='flex items-center gap-x-1'>
                                                    <img src="/static/yellow-card.png" className='h-4' alt="" />
                                                </div>
                                            </div>}

                                            {/* print yellowcard for home team */}

                                            {player?.cards?.red && <div className='flex justify-between items-center gap-x-1'>
                                                <div className='flex-1'>
                                                    <span>{player?.name} </span>
                                                    <span>{player?.surname} </span>
                                                    {/* {player?.nickname && <span>({player?.nickname}) </span>} */}
                                                </div>

                                                <div className='flex items-center gap-x-1'>
                                                    <img src="/static/red-card.png" className='h-4' alt="" />
                                                </div>
                                            </div>}

                                        </div>
                                    )

                                })}
                            </div>

                            {/* Away team details */}
                            <div className='border-l flex-1 p-2'>
                                {(match && !isFetching) && match.away_team.players.map((player: any) => {

                                    return (
                                        <div key={player.id}>
                                            {/* print goals for home team */}
                                            {player.goals ?
                                                <div>
                                                    <div className='flex justify-between items-center gap-x-2'>
                                                        <div>
                                                            <span>{player.name} </span>
                                                            <span>{player.surname} </span>
                                                            {/* {player.nickname && <span>({player.nickname}) </span>} */}
                                                        </div>

                                                        <div className='flex gap-x-1'>
                                                            <span>{player.goals}</span>
                                                            <img src="/static/ellipse_24.svg" className='w-5' alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                : <div></div>}

                                            {/* print yellowcard for home team */}

                                            {player?.cards?.yellow && <div className='flex justify-between gap-x-1'>
                                                <div>
                                                    <span>{player.name} </span>
                                                    <span>{player.surname} </span>
                                                    {/* {player.nickname && <span>({player.nickname}) </span>} */}
                                                </div>

                                                <div className='flex items-center gap-x-1'>

                                                    <img src="/static/yellow-card.png" className='h-4' alt="" />
                                                </div>
                                            </div>}

                                            {/* print yellowcard for home team */}

                                            {player?.cards?.red && <div className='flex justify-between gap-x-1'>
                                                <div>
                                                    <span>{player?.name} </span>
                                                    <span>{player?.surname} </span>
                                                    {/* {player.nickname && <span>({player.nickname}) </span>} */}
                                                </div>

                                                <div className='flex items-center gap-x-1'>

                                                    <img src="/static/red-card.png" className='h-4' alt="" />
                                                </div>
                                            </div>}

                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                    </div>
                }
                {/* detalhe match??
                <div className='bg-bg-secondary py-16'>
                    <div className='max-w-container 2xl:max-w-container-xl mx-auto px-4'>
                        <Title variant={Title.variant.tertiary}> Dettagli match</Title>
                        <p className='mt-8 lg:w-1/2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente tempora debitis ipsa ipsum eligendi officiis! Dolores facilis, repudiandae velit nulla minima provident officiis vero autem aut repellat rem doloribus.</p>
                    </div>
                </div> */}

            </section>

            {/* livestream */}
            {/* <LiveStream /> */}

            {/* next matches */}
            {/* <section id='nextMatches' className='max-w-container 2xl:max-w-container-xl mx-auto px-4 py-8'>
                <h2 className='text-2xl font-bold mb-2'>Prossime Partite</h2>
                {nextMatches.map((match: any) => (
                    <DetaglioPartita key={match.id} match={match} />
                ))}
            </section> */}
        </>
    )
}