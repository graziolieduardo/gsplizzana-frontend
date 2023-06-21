
type Props = any
export default function DetaglioPartita({ match }: Props) {
    return (
        <>
            <div key={match.home} className={`flex justify-between border items-center p-4 rounded mb-4 ${match.live ? 'bg-gradient-to-r from-primary-dark/50 to-primary/40  border-2 border-primary-dark shadow-[0_2px_8px_rgba(237,83,0,0.25)]' : "shadow-[0_2px_8px_rgba(0,0,0,0.25)]"} ${match.isDone ? 'shadow-none bg-bg-secondary' : null}`}>
                <div className='font-semibold text-sm'>{match.home}</div>
                <div className='font-bold text-lg'>{match.result}</div>
                <div className='font-semibold text-sm'>{match.guest}</div>

            </div>
        </>
    )
}
