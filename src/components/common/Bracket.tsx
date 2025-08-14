import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Bracket = ({ group_id }: { group_id: number }) => {
    const getMatches = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${group_id}/fixtures`);
        return res.data;
    }

    const { data: matches, isLoading, isFetching } = useQuery(['matches', group_id],
        () => getMatches(),
        {
            keepPreviousData: true,
        }
    )

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 mx-auto">
            {
                matches?.data?.length > 0 && matches?.data?.map((match: any) => (

                    <div key={match.id} className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${match.live ? 'border-primary-dark' : null}`}>
                        <div className="divide-y-2 px-4 py-2" >

                            {
                                (isLoading || isFetching) ?
                                    <Skeleton count={1} className='mt-2 mb-2' height={35} />
                                    :
                                    <div className="flex justify-between py-4 px-2">
                                        <div className="flex items-center gap-x-2">
                                            {
                                                match.home_team ?
                                                    <Image
                                                        src={`https://api.gsplizzana.it${match?.home_team?.logo_url}`}
                                                        alt="Logo squadra di casa"
                                                        width={40}
                                                        height={40}
                                                    />
                                                    :
                                                    <img src="/static/ellipse_24.svg" alt="" />
                                            }
                                            <p>{match.home_team ? match.home_team.name : 'Squadra da definire'}</p>
                                        </div>
                                        <p>{(match.closed || match.live) ? match.home_team.score : null}</p>
                                    </div>
                            }

                            {
                                (isLoading || isFetching) ?
                                    <Skeleton count={1} className='mt-2 mb-2' height={35} />
                                    :
                                    <div className="flex justify-between py-4 px-2">
                                        <div className="flex items-center gap-x-2">
                                            {
                                                match.away_team ?
                                                    <Image
                                                        src={`https://api.gsplizzana.it${match?.away_team?.logo_url}`}
                                                        alt="Logo squadra ospite"
                                                        width={40}
                                                        height={40}
                                                    />
                                                    :
                                                    <img src="/static/ellipse_24.svg" alt="" />
                                            }
                                            <p>{match.away_team ? match.away_team.name : 'Squadra da definire'}</p>
                                        </div>
                                        <p>{(match.closed || match.live) ? match.away_team.score : null}</p>
                                    </div>
                            }
                        </div>
                        <div className="border-t">
                            <div className="p-4 text-center">
                                {match.away_team ? <Link href={{ pathname: `/partita/${match.id}`, query: { group_id: match.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
