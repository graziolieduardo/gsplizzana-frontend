import Link from "next/link"

type Props = any
export default function DetaglioPartita({ match }: Props) {
    return (
        <>
            <Link href={`/partita/${match.id}`} className={`flex text-center justify-between border items-center py-3 min-h-[70px] px-[4%] rounded mb-4 ${match.live ? 'bg-gradient-to-r from-primary-dark/50 to-primary/40  border-2 border-primary-dark shadow-[0_2px_8px_rgba(237,83,0,0.25)]' : "shadow-[0_2px_8px_rgba(0,0,0,0.25)]"} ${!match.isDone ? 'shadow-none bg-bg-secondary' : null}`}>
                <div className='font-semibold text-sm min-w-[40%]'>{match.home}</div>
                <div className="text-center min-w-[20%]">
                    <div className="text-xs font-semibold text-primary-dark">h {match.time}</div>'
                    
                    {
                        match && <div className='font-bold text-sm'>
                            <span>{match.result.home}</span>
                            <span> - </span>
                            <span>{match.result.guest}</span>
                        </div>
                    }
                    
                </div>
                <div className='font-semibold text-sm min-w-[40%]'>{match.guest}</div>
            </Link>
        </>
    )
}
