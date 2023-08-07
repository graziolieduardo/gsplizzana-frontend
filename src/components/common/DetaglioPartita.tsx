import Link from "next/link"

type Props = any
export default function DetaglioPartita({ match }: Props) {
   
    const date = new Date(match.scheduled_at)
    const hour = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const matchDate = `${hour}:${minutes}`
    
    return (
        <>
            {match && <Link href={`/partita/${match.id}`} className={`flex text-center justify-between border items-center py-3 min-h-[70px] px-[4%] rounded mb-4 ${match.live ? 'bg-gradient-to-r from-primary-dark/50 to-primary/40  border-2 border-primary-dark shadow-[0_2px_8px_rgba(237,83,0,0.25)]' : "shadow-[0_2px_8px_rgba(0,0,0,0.25)]"} ${!match.closed ? 'shadow-none bg-bg-secondary' : null}`}>
                <div className='font-semibold text-sm min-w-[40%]'>{match.home_team && match.home_team.name}</div>
                <div className="text-center min-w-[20%]">
                    <div className="text-xs font-semibold text-primary-dark">h {matchDate}</div>
                    
                    {/* if match is closed or live will show the result, otherwise will not show  */}
                    { (match.closed || match.live) &&
                        <div className='font-bold text-sm'>
                            <span>{match.home_team && match.home_team.score}</span>
                            <span> - </span>
                            <span>{match.away_team && match.away_team.score}</span>
                        </div>
                    }
                    
                </div>
                <div className='font-semibold text-sm min-w-[40%]'>{match.away_team && match.away_team.name}</div>
            </Link>}
        </>
    )
}
