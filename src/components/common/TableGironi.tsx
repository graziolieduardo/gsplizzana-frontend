import React, { useState } from 'react'

type Props = any

export default function TableGironi({ girone, campeonato }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div key={girone} className={`mb-4 last:mr-4 bg-gray-50 w-full sm:w-[350px] rounded-md border`}>

                <div className='pt-7 px-5'>

                    <table className='w-full'>
                        <caption className='mb-4 text-xl text-start'>{girone}</caption>
                        <thead>
                            <tr>
                                <th className='text-normal'>
                                    &nbsp;</th>
                                <th className='text-xs font-semibold'>Pt</th>
                                <th className='text-xs'>G</th>
                                <th className='text-xs'>DF</th>
                                <th className='text-xs'>W</th>
                                <th className='text-xs'>W</th>
                                <th className='text-xs'>W</th>

                            </tr>
                        </thead>
                        <tbody>
                            {campeonato[girone].map((girone: any) => (

                                <tr key={girone.points} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                    <td className='py-2 max-w-[70px] truncate text-sm'><span className='font-semibold pr-2 '>{girone.position}</span> {girone.club.clubName}</td>
                                    <td className='py-2 font-semibold'>{girone.points}</td>
                                    <td className='py-2'>{girone.win}</td>
                                    <td className='py-2'>{girone.matches}</td>
                                    <td className='py-2'>{girone.lose}</td>
                                    <td className='py-2'>{girone.lose}</td>
                                    <td className='py-2'>{girone.lose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* dettagli partita */}
                <div onClick={() => setIsOpen(!isOpen)} className='py-3 px-4 mt-4 border-t'>
                    <div className='font-semibold text-primary-dark text-sm'>Dettagli partite <img src="/static/chevron-down.svg" className={`inline-block w-2 ml-2 ${isOpen ? 'rotate-180' : null}`} alt="" /></div>
                </div>
                {isOpen ?
                    <div className='bg-white py-3 px-4 border-t'>
                        <div className=''>
                            ciao
                        </div>
                    </div>
                    : null}



            </div>
        </>
    )
}
