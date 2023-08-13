import Link from "next/link";

export const QuartiMBracket = ({ matches }: any) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 mx-auto">
            {/* PARTITA 9 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[8]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[8]?.home_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[8]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[8]?.home_team.length > 0 ? matches[8]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[8]?.closed || matches[8]?.live) ? matches[8]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[8]?.away_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[8]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[8]?.away_team.length > 0 ? matches[8]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[8]?.closed || matches[8]?.live) ? matches[8]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[8]?.away_team.length > 0 ? <Link href={`/partita/${matches[8]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 10 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[9]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[9]?.home_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[9]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[9]?.home_team.length > 0 ? matches[9]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[9]?.closed || matches[9]?.live) ? matches[9]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[9]?.away_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[9]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[9]?.away_team.length > 0 ? matches[9]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[9]?.closed || matches[9]?.live) ? matches[9]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[9]?.away_team.length > 0 ? <Link href={`/partita/${matches[9]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 11 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[10]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[10]?.home_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[10]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[10]?.home_team.length > 0 ? matches[10]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[10]?.closed || matches[10]?.live) ? matches[10]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[10]?.away_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[10]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[10]?.away_team.length > 0 ? matches[10]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[10]?.closed || matches[10]?.live) ? matches[10]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[10]?.away_team.length > 0 ? <Link href={`/partita/${matches[10]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
            {/* PARTITA 12 */}
            <div className={`bg-bg-secondary max-w-[650px] min-w-[320px] place-self-center border rounded-md ${matches[11]?.live ? 'border-primary-dark' : null}`}>
                <div className="divide-y-2 px-4 py-2" >

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[11]?.home_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[11]?.home_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[11]?.home_team.length > 0 ? matches[11]?.home_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[11]?.closed || matches[11]?.live) ? matches[11]?.home_team.score : null}</p>
                    </div>

                    <div className="flex justify-between py-4 px-2">
                        <div className="flex items-center gap-x-2">
                            {matches[11]?.away_team.length > 0 ? <img width={40} src={`/static/loghi_squadre/tondi/TEAM/${matches[11]?.away_team?.name?.replace(/\s/g, '').replace('#', '').replace('-', '').replace('\'', '').replace('(', '').replace(')', '').toLowerCase()}.png`} alt="" /> : <img src="/static/ellipse_2.svg" alt="" />}
                            <p>{matches[11]?.away_team.length > 0 ? matches[11]?.away_team.name : 'Squadra da definire'}</p>
                        </div>
                        <p>{(matches[11]?.closed || matches[11]?.live) ? matches[11]?.away_team.score : null}</p>
                    </div>
                </div>
                <div className="border-t">
                    <div className="p-4 text-center">
                        {matches[11]?.away_team.length > 0 ? <Link href={`/partita/${matches[11]?.id}`} className="text-primary-dark text-sm font-semibold">Dettagli partita</Link> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
