import Link from "next/link"

type Props = any

export default function DetaglioPartita_2({ data }: Props) {
    // console.log(data);

    const convertDate = (arg: any) => {
        const date = new Date(arg)
        const hour = date.getHours()
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hour}:${minutes}`;
    }

    return (
        <>
            {
                // data && data?.data?.map((match: any) => (
                <Link href={`/partita/${data.id}`} className={`flex text-center justify-between border items-center py-3 min-h-[70px] px-[4%] rounded mb-4 ${data.live ? 'bg-gradient-to-r from-primary-dark/50 to-primary/40  border-2 border-primary-dark shadow-[0_2px_8px_rgba(237,83,0,0.25)]' : "shadow-[0_2px_8px_rgba(0,0,0,0.25)]"} ${!data.closed ? 'shadow-none bg-bg-secondary' : null}`}>
                    <div className='font-semibold text-sm min-w-[40%]'>{data.home_team && data.home_team}</div>
                    <div className="text-center min-w-[20%]">
                        <div className="text-xs font-semibold text-primary-dark">{data?.scheduled_at}</div>
                        {/* <div className="text-xs font-semibold text-primary-dark">{convertDate(data?.scheduled_at)}</div> */}

                        {/* if data is closed or live will show the result, otherwise will not show  */}
                        {/* {(data.closed || data.live) &&
                            <div className='font-bold text-sm'>
                                <span>{data.home_team && data.home_team.score}</span>
                                <span> - </span>
                                <span>{data.away_team && data.away_team.score}</span>
                            </div>
                        } */}

                    </div>
                    <div className='font-semibold text-sm min-w-[40%]'>{data.away_team && data.away_team}</div>
                </Link>
                // ))
            }
        </>
    )
}
