import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = any

export default function DetaglioPartita({ param }: Props) {
    const fetchDetail = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${param}/fixtures`);
        return res.data;
    }

    // GET SINGLE ORDER
    const { data: detail, isLoading, isFetching } = useQuery(['detail'],
        () => fetchDetail(),
        {
            refetchOnWindowFocus: false,
        }
    );

    const convertDate = (arg: any) => {
        const date = new Date(arg)
        const hour = date.getHours()
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hour}:${minutes}`;
    }


    return (
        <>
            {(isFetching || isLoading) && <Skeleton count={6} className='mt-3 first:mt-0' height={70} />}
            {
                detail && (!isFetching && !isLoading) && detail?.data?.map((match: any) => (
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
