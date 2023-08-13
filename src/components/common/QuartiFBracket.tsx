import Link from "next/link";

export const QuartiFBracket = ({ matches }: any) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 mx-auto">
            {/* PARTITA 9 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[0]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[0]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[0]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[0]?.home_team ? matches[0]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[0]?.closed || matches[0]?.live) ? matches[0]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[0]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[0]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[0]?.away_team ? matches[0]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[0]?.closed || matches[0]?.live) ? matches[0]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[0]?.away_team ? <Link href={`/partita/${matches[0]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 10 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[1]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[1]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[1]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[1]?.home_team ? matches[1]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[1]?.closed || matches[1]?.live) ? matches[1]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[1]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[1]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[1]?.away_team ? matches[1]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[1]?.closed || matches[1]?.live) ? matches[1]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[1]?.away_team ? <Link href={`/partita/${matches[1]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 11 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[2]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[2]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[2]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[2]?.home_team ? matches[2]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[2]?.closed || matches[2]?.live) ? matches[2]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[2]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[2]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[2]?.away_team ? matches[2]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[2]?.closed || matches[2]?.live) ? matches[2]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[2]?.away_team ? <Link href={`/partita/${matches[2]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 12 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[3]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[3]?.home_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[3]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[3]?.home_team ? matches[3]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[3]?.closed || matches[3]?.live) ? matches[3]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[3]?.away_team ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[3]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[3]?.away_team ? matches[3]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[3]?.closed || matches[3]?.live) ? matches[3]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[3]?.away_team ? <Link href={`/partita/${matches[3]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
