import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PlayoffMaschili = () => {
    const getMatches = async () => {
        // TODO: settare gruppo giusto
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${9}/fixtures`);
        return res.data;
    }

    const { data: matches, isLoading, isFetching } = useQuery(['matches'],
        () => getMatches(),
        {
            keepPreviousData: true,
        }
    )

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 mx-auto">
            {/* PARTITA 1 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[0]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[0]?.home_team ?
                                        <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[0]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" />
                                        :
                                        <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[0]?.home_team ? matches?.data[0]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[0]?.closed || matches?.data[0]?.live) ? matches?.data[0]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[0]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[0]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[0]?.away_team ? matches?.data[0]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[0]?.closed || matches?.data[0]?.live) ? matches?.data[0]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[0]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[0]?.id}`, query: { group_id: matches?.data[0]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 2 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[1]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[1]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[1]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[1]?.home_team ? matches?.data[1]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[1]?.closed || matches?.data[1]?.live) ? matches?.data[1]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[1]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[1]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[1]?.away_team ? matches?.data[1]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[1]?.closed || matches?.data[1]?.live) ? matches?.data[1]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[1]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[1]?.id}`, query: { group_id: matches?.data[1]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 3 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[2]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[2]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[2]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[2]?.home_team ? matches?.data[2]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[2]?.closed || matches?.data[2]?.live) ? matches?.data[2]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[2]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[2]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[2]?.away_team ? matches?.data[2]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[2]?.closed || matches?.data[2]?.live) ? matches?.data[2]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[2]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[2]?.id}`, query: { group_id: matches?.data[2]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 4 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[3]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[3]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[3]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[3]?.home_team ? matches?.data[3]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[3]?.closed || matches?.data[3]?.live) ? matches?.data[3]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[3]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[3]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[3]?.away_team ? matches?.data[3]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[3]?.closed || matches?.data[3]?.live) ? matches?.data[3]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[3]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[3]?.id}`, query: { group_id: matches?.data[3]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 5 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[4]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[4]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[4]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[4]?.home_team ? matches?.data[4]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[4]?.closed || matches?.data[4]?.live) ? matches?.data[4]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[4]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[4]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[4]?.away_team ? matches?.data[4]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[4]?.closed || matches?.data[4]?.live) ? matches?.data[4]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[4]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[4]?.id}`, query: { group_id: matches?.data[4]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 6 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[5]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[5]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[5]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[5]?.home_team ? matches?.data[5]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[5]?.closed || matches?.data[5]?.live) ? matches?.data[5]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[5]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[5]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[5]?.away_team ? matches?.data[5]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[5]?.closed || matches?.data[5]?.live) ? matches?.data[5]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[5]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[5]?.id}`, query: { group_id: matches?.data[5]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 7 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[6]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[6]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[6]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[6]?.home_team ? matches?.data[6]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[6]?.closed || matches?.data[6]?.live) ? matches?.data[6]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[6]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[6]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[6]?.away_team ? matches?.data[6]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[6]?.closed || matches?.data[6]?.live) ? matches?.data[6]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[6]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[6]?.id}`, query: { group_id: matches?.data[6]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 8 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches?.data[7]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[7]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[7]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[7]?.home_team ? matches?.data[7]?.home_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[7]?.closed || matches?.data[7]?.live) ? matches?.data[7]?.home_team.score : null}</p>
                            </div>
                    }

                    {
                        (isLoading || isFetching) ?
                            <Skeleton count={1} className='mt-2 mb-2' height={35} />
                            :
                            <div className="flex justify-between py-4 px-2">
                                <div className="flex items-center gap-x-2">
                                    {matches?.data[7]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches?.data[7]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').replace(/\./g, '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_24.svg" alt="" />}
                                    <p>{matches?.data[7]?.away_team ? matches?.data[7]?.away_team.name : 'Squadra da definire'}</p>
                                </div>
                                <p>{(matches?.data[7]?.closed || matches?.data[7]?.live) ? matches?.data[7]?.away_team.score : null}</p>
                            </div>
                    }
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches?.data[7]?.away_team ? <Link href={{ pathname: `/partita/${matches?.data[7]?.id}`, query: { group_id: matches?.data[7]?.group_id } }} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}