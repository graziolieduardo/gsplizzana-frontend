import Link from "next/link";

export const FinaleFBracket = ({ matches }: any) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 mx-auto">
            {/* PARTITA 9 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[7]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[7]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[7]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[7]?.home_team ? matches[7]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[7]?.closed || matches[7]?.live) ? matches[7]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[7]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[7]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[7]?.away_team ? matches[7]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[7]?.closed || matches[7]?.live) ? matches[7]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[7]?.away_team ? <Link href={`/partita/${matches[7]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
