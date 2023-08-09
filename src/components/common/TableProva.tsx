import { useState } from "react"
import DetaglioPartita from "./DetaglioPartita"

type Props = any

export default function TableProva({ data, girone, param }: Props) {
    // console.log(data);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div className='mb-4 bg-bg-secondary w-full rounded-md border'>
                <div className='pt-7 px-5 '>

                    <table className='w-full'>
                        <caption className='mb-4 text-xl font-semibold text-start'>{girone}</caption>
                        <thead>
                            <tr>
                                <th className='text-normal'>&nbsp;</th>
                                <th className='text-xs font-semibold'>Pt</th>
                                <th className='text-xs'>W</th>
                                <th className='text-xs'>Gf</th>
                                <th className='text-xs'>Gs</th>
                                {/* <th className='text-xs'>W</th> */}
                                {/* <th className='text-xs'>W</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data?.data?.map((team: any, index: any) => (

                                    <tr key={team?.name} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                        <td className='py-3 max-w-[70px] truncate text-sm'>
                                            <span className='font-semibold pr-2 '>{index + 1}</span>
                                            {team?.name}
                                        </td>
                                        <td className='py-3 font-semibold'>{team?.points}</td>
                                        <td className='py-3'>{team?.wins}</td>
                                        <td className='py-3'>{team?.goals_scored}</td>
                                        <td className='py-3'>{team?.goals_conceded}</td>
                                        {/* <td className='py-3'>{team?.win}</td> */}
                                        {/* <td className='py-3'>{team?.win}</td> */}
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>


                <div onClick={() => setIsOpen(!isOpen)} className='py-3 px-4 mt-4 border-t cursor-pointer'>
                    <div className='font-semibold text-primary-dark text-sm'>Dettagli partite <img src="/static/chevron-down.svg" className={`inline-block w-2 ml-2 ${isOpen ? 'rotate-180' : null}`} alt="" /></div>
                </div>


                {isOpen ?
                    <div className='bg-white py-4 px-4 border-t'>
                        <DetaglioPartita param={param} />
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}
