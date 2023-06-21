import { useState } from "react"
import DetaglioPartita from "./DetaglioPartita"

type Props = any

export default function TableProva({ data, girone }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const matches = [
        {
            id: 1,
            home: 'squadra 1',
            guest: 'squadra 3',
            result: ' 0 x 1',
            isDone: true,
            live: false,
            time: '14.50'
        },
        {
            id: 2,
            home: 'squadra 2 longo demais',
            guest: 'squadra 4',
            result: ' 2 x 1',
            isDone: true,
            live: false,
            time: '14.50'
        },
        {
            id: 3,
            home: 'squadra 3',
            guest: 'squadra 2',
            result: ' 4 x 1',
            isDone: false,
            live: true,
            time: '14.50'
        },
        {
            id: 4,
            home: 'squadra 4',
            guest: 'squadra 1',
            result: false,
            isDone: false,
            live: false,
            time: '14.50'
        },
    ]

    return (
        <>
            <div className='mb-4 bg-bg-secondary w-full sm:w-[calc(50%-10px)] xl:w-[calc(33%-10px)] 2xl:w-[calc(25%-15px)] max-w-[430px] rounded-md border'>
                <div className='pt-7 px-5 '>

                    <table className='w-full'>
                        <caption className='mb-4 text-xl font-semibold text-start'>{girone}</caption>
                        <thead>
                            <tr>
                                <th className='text-normal'>
                                    &nbsp;</th>
                                <th className='text-xs font-semibold'>Pt</th>
                                <th className='text-xs'>G</th>
                                <th className='text-xs'>Df</th>
                                <th className='text-xs'>W</th>
                                <th className='text-xs'>W</th>
                                <th className='text-xs'>W</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data[girone].map((team: any) => (

                                    <tr key={team.club.clubName} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                        <td className='py-3 max-w-[70px] truncate text-sm'><span className='font-semibold pr-2 '>{team.position}</span> {team.club.clubName}</td>
                                        <td className='py-3 font-semibold'>{team.points}</td>
                                        <td className='py-3'>{team.matches}</td>
                                        <td className='py-3'>{team.win}</td>
                                        <td className='py-3'>{team.win}</td>
                                        <td className='py-3'>{team.win}</td>
                                        <td className='py-3'>{team.win}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

                {/* dettagli partita */}
                <div onClick={() => setIsOpen(!isOpen)} className='py-3 px-4 mt-4 border-t'>
                    <div className='font-semibold text-primary-dark text-sm'>Dettagli partite <img src="/static/chevron-down.svg" className={`inline-block w-2 ml-2 ${isOpen ? 'rotate-180' : null}`} alt="" /></div>
                </div>
      
                {isOpen ?
                    <div className='bg-white py-4 px-4 border-t'>
                        {matches.map((match: any) => (
                            <DetaglioPartita key={match.id} match={match} />
                        ))}
                    </div>
                    :
                    null
                }
            </div>
        </>
    )
}
