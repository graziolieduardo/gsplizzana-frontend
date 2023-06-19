import React from 'react'

type Props = any

export default function TableHomr({girone, campeonato, bgColor = 'bg-white'}: Props) {
    return (
        <>
            <div key={girone} className={`mb-4 last:mr-4 ${bgColor} min-w-[280px] rounded-md w-fit py-5 px-5  border`}>

                <table className='w-full'>
                    <caption className='mb-4 text-xl font-semibold text-start'>{girone}</caption>
                    <thead>
                        <tr>
                            <th className='text-normal min-w-[100px]'>
                                &nbsp;</th>
                            <th className='text-xs font-semibold'>Pt</th>
                            <th className='text-xs'>G</th>
                            <th className='text-xs'>W</th>

                        </tr>
                    </thead>
                    <tbody>
                        {campeonato[girone].map((girone: any) => (

                            <tr key={girone.points} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                <td className='py-2 max-w-[100px] truncate font-semibold text-sm'>{girone.club.clubName}</td>
                                <td className='py-2 font-semibold'>{girone.points}</td>
                                <td className='py-2'>{girone.matches}</td>
                                <td className='py-2'>{girone.win}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
