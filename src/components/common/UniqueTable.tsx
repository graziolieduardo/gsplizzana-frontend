import React from 'react'

export default function UniqueTable() {
    const data = {
        data: [
            {
                name: "prova 1",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
            {
                name: "prova 2",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
            {
                name: "prova 2",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
            {
                name: "prova 2",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
            {
                name: "prova 2",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
            {
                name: "prova 2",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
            {
                name: "prova 2",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
            {
                name: "prova 2",
                points: 3,
                wins: 1,
                goals_scored: 2,
                goals_conceded: 1
            },
        ]
    }

    return (
        <div className='mb-4 bg-bg-secondary w-full mx-auto rounded-md border'>

            <div className='pt-7 px-5 '>

                <table className='w-full'>
                    <caption className='mb-4 text-xl font-semibold text-start'> Maschile Girone Unico</caption>
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
        </div>
    )
}
