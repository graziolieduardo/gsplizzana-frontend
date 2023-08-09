import React from 'react'

type Props = any

export default function TableHomr({ data, girone, bg }: Props) {
    return (
        <>
            <div key={girone} className={`mb-4 last:mr-4 ${bg} min-w-[280px] rounded-md w-fit py-5 px-6 border`}>

                <table className='w-full'>
                    <caption className='mb-4 text-xl font-semibold text-start'>{girone}</caption>
                    <thead>
                        <tr>
                            <th className='text-normal min-w-[100px]'>
                                &nbsp;</th>
                            <th className='text-xs font-semibold'>Pt</th>
                            <th className='text-xs'>W</th>
                            <th className='text-xs'>Gf</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data?.data?.map((team: any) => (
                                <tr key={team?.name} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                    <td className='py-2 max-w-[100px] truncate font-semibold text-sm'>{team?.name}</td>
                                    <td className='py-2 font-semibold'>{team.points}</td>
                                    <td className='py-2'>{team?.wins}</td>
                                    <td className='py-2'>{team?.goals_scored}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
