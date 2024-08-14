import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import Link from "next/link";
import { useEffect } from "react";

export const LiveMatch = () => {
    const { data: liveMatch } = useQuery(['live'],
        () => getLiveMatch(), {
        refetchOnWindowFocus: false,
        refetchInterval: 15000,
        retry: false
    });

    const getLiveMatch = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}live`);
        return res.data;
    }

    useEffect(() => {
        getLiveMatch();
    }, []);

    if (!liveMatch?.data) return null;

    return (
        <div className="px-4 py-6 bg-gradient-to-r from-black to-text-subtle text-white ">
            <Link className="flex justify-center mb-4" href={{ pathname: `/partita/${liveMatch?.data.id}`, query: { group_id: liveMatch?.data?.group_id } }}>
                <div className="bg-gradient-to-r from-primary-dark to-primary px-10 py-2 rounded flex items-center">
                    <div className="pulse text-white">
                        &#9679; Live Streaming
                    </div>
                </div>
            </Link>

            <div className={`flex justify-between items-center mb-4 min-h-[70px] rounded border-primary-dark shadow-[0_2px_8px_rgba(0,0,0,0.25) `}>
                {/* Home team */}
                <div className='flex flex-col items-center flex-1'>
                    <div className='mb-2'>
                        <img width={70} src={`/static/loghi_squadre/tondi/TEAM/${liveMatch?.data && liveMatch?.data?.home_team?.name.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" />
                    </div>
                    <div className='font-semibold text-center'>{liveMatch?.data && liveMatch?.data?.home_team?.name}</div>
                </div>

                {/* placar */}
                <div className="text-center min-w-[20%]">
                    {/* {!isFetching && <div className="text-xs font-semibold text-primary-dark">h {getliveMatch.data && liveMatch.dataDate(liveMatch.data && liveMatch.data)} </div>} */}

                    {/* {(liveMatch.data && liveMatch.data.closed || liveMatch.data && liveMatch.data.live) && */}
                    <div className='font-bold text-xl text-center'>
                        <div className="text-xs mb-2">
                            {Math.floor(liveMatch?.data?.timer?.current / 60)}&apos;
                        </div>
                        <div>
                            <span>{liveMatch?.data && liveMatch?.data?.home_team.score}</span>
                            <span> - </span>
                            <span>{liveMatch?.data && liveMatch?.data?.away_team.score}</span>
                        </div>
                    </div>
                </div>

                {/* guest team */}
                <div className='flex flex-col items-center flex-1'>
                    <div className='mb-2'>
                        <img width={70} src={`/static/loghi_squadre/tondi/TEAM/${liveMatch?.data && liveMatch?.data?.away_team?.name.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" />
                    </div>
                    <div className='font-semibold text-center'>{liveMatch?.data && liveMatch?.data?.away_team?.name}</div>
                </div>
            </div>
        </div>
    )
}
