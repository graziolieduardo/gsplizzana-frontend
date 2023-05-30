import React from 'react'

type Props = any

export default function Table({girone, campeonato, bgColor = 'bg-white'}: Props) {
    return (
        <>
            <div key={girone} className={`mb-4 last:mr-4 ${bgColor} rounded-md w-fit p-6  border`}>

                <table className='min-w-[260px]'>
                    <caption className='mb-2 text-xl font-semibold text-start'>{girone}</caption>
                    <thead>
                        <tr>
                            <th className='text-normal min-w-[170px]'>
                                &nbsp;</th>
                            <th className='text-xs'>P</th>
                            <th className='text-xs'>W</th>
                            <th className='text-xs'>D</th>
                            <th className='text-xs'>P</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campeonato[girone].map((girone: any) => (

                            <tr key={girone.points} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                <td className='py-2 w-[120px] whitespace-nowrap overflow-hidden font-semibold text-sm'><img src="/static/Ellipse_2.svg" className='inline-block mr-2 ' alt="" />{girone.club.clubName}</td>
                                <td className='py-2'>{girone.matches}</td>
                                <td className='py-2'>{girone.win}</td>
                                <td className='py-2'>{girone.lose}</td>
                                <td className='text-semibold py-2'>{girone.points}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}
