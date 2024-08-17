import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Title } from './Title';

export default function UniqueTable({ data }: any) {

    const router = useRouter();
    const currentPath = router.pathname;

    const [page, setPage] = useState(1);
    const [finalArr, setFinalArr] = useState([]);

    const goalDifference = (team: any) => {
        return team.goals_scored - team.goals_conceded;
    }

    useEffect(() => {
        const tmpArr = data?.data.sort((a: any, b: any) => {
            if (b.points !== a.points) {
                return b.points - a.points;
            } else {
                return goalDifference(b) - goalDifference(a);
            }
        });
        setFinalArr(tmpArr);
    }, [data]);

    const getMatches = async (page: any) => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${1}/fixtures`, { params: { page: page, per_page: 20 } });
        return res.data;
    }

    const { data: manMatches, isLoading, isFetching } = useQuery(['manMatches', page],
        () => getMatches(page),
        {
            keepPreviousData: true,
        }
    )

    const convertDate = (arg: any) => {
        const date = new Date(arg)
        const hour = date.getHours()
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hour}:${minutes}`;
    }


    // useEffect(() => {
    //     console.log(manMatches);
    // }, [manMatches]);

    return (
        <>
            <div className='bg-bg-secondary w-full mx-auto rounded-md border'>
                <div className='pt-7 px-5 '>

                    <table className='w-full'>
                        <caption className='mb-4 text-xl font-semibold text-start'>Maschile Girone Unico</caption>
                        <thead>
                            <tr>
                                <th className='text-normal'>&nbsp;</th>
                                <th className='text-xs font-semibold'>Pt</th>
                                <th className='text-xs font-semibold'>Pg</th>
                                <th className='text-xs'>W</th>
                                <th className='text-xs'>Gf</th>
                                <th className='text-xs'>Gs</th>
                                {/* <th className='text-xs'>W</th> */}
                                {/* <th className='text-xs'>W</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            {
                                finalArr?.length > 0 && finalArr?.map((team: any, index: any) => (

                                    <tr key={team?.name} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                        <td className='py-3 max-w-[70px] truncate text-sm'>
                                            <span className='font-semibold pr-2 '>{index + 1}</span>
                                            {team?.name}
                                        </td>
                                        <td className='py-3 font-semibold'>{team?.points}</td>
                                        <td className='py-3 font-semibold'>{team?.wins + team?.draws + team?.losses}</td>
                                        <td className='py-3'>{team?.wins}</td>
                                        <td className='py-3'>{team?.goals_scored}</td>
                                        <td className='py-3'>{team?.goals_conceded}</td>
                                        {/* <td className='py-3'>{team?.win}</td> */}
                                        {/* <td className='py-3'>{team?.win}</td> */}
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <p className='text-[10px] font-semibold mb-4'>Pt=punti, Pg=partite giocate, W=vittorie, Gf=goal fatti, Gs=goal subiti.</p>

            {
                currentPath.includes('gironi') &&
                <>
                    <div className='mb-2'>
                        <Title variant={Title.variant.secondary}>Partite</Title>
                    </div>
                    <div className='flex justify-between mb-2'>
                        {/* previous button */}
                        <button className={` border-2 border-primary-dark rounded disabled:border-primary-dark/5`} disabled={page == 1 ? true : false} onClick={() => { page > 1 && setPage(page - 1) }}>
                            <img className='w-8' src="/static/chevron-left.svg" alt="" />
                        </button>

                        <div className='flex gap-x-2'>
                            {/* prev page */}
                            <div className='flex items-center text-center capitalize'>
                                <p className={`${page <= 1 ? 'invisible' : ''} text-xl font-semibold px-3`}>{page - 1}</p>
                            </div>

                            {/* middle text for the active item */}
                            <div className=' text-center capitalize'>
                                <p className='text-xl font-semibold border-2 border-primary-dark rounded px-3 py-1'>{page}</p>
                            </div>

                            {/* next page */}
                            <div className="flex items-center text-center capitalize">
                                <p className={`${page >= manMatches?.meta?.last_page ? 'invisible' : ''} text-xl font-semibold px-3`}>{page + 1}</p>
                            </div>
                        </div>

                        {/* next button */}
                        <button className={` border-2 border-primary-dark disabled:border-primary-dark/5 rounded`} disabled={page == manMatches?.meta?.last_page ? true : false} onClick={() => { page < manMatches?.meta?.last_page && setPage(page + 1) }}>
                            <img className='w-8 cursor-pointer text-gray-300' src="/static/chevron-right.svg" alt="" />
                        </button>
                    </div>
                </>
            }

            {(isFetching || isLoading) && <Skeleton count={6} className='mt-3 first:mt-0' height={70} />}
            {
                manMatches && (!isFetching && !isLoading) && manMatches?.data?.map((match: any) => (
                    <Link key={match?.id} href={{ pathname: `/partita/${match.id}`, query: { group_id: match?.group_id } }} className={`flex text-center justify-between border items-center py-3 min-h-[70px] px-[4%] rounded mb-4 ${match.live ? 'bg-gradient-to-r from-primary-dark/50 to-primary/40  border-2 border-primary-dark shadow-[0_2px_8px_rgba(237,83,0,0.25)]' : "shadow-[0_2px_8px_rgba(0,0,0,0.25)]"} ${!match.closed ? 'shadow-none bg-bg-secondary' : null}`}>
                        <div className='font-semibold text-sm min-w-[40%]'>{match.home_team && match.home_team.name}</div>
                        <div className="text-center min-w-[20%]">
                            <div className="text-xs text-center pb-1">{new Date(match.scheduled_at).toLocaleString('it', { weekday: 'long' })}</div>
                            <div className="text-xs font-semibold text-primary-dark">{convertDate(match?.scheduled_at)}</div>

                            {/* if match is closed or live will show the result, otherwise will not show  */}
                            {(match.closed || match.live) &&
                                <div className='font-bold text-sm'>
                                    <span>{match.home_team && match.home_team.score}</span>
                                    <span> - </span>
                                    <span>{match.away_team && match.away_team.score}</span>
                                </div>
                            }

                        </div>
                        <div className='font-semibold text-sm min-w-[40%]'>{match.away_team && match.away_team.name}</div>
                    </Link>

                ))
            }
        </>
    )
}
