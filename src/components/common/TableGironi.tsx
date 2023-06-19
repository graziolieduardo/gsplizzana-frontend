import React, { useEffect, useState } from 'react'

type Props = any

interface Club {
    id: number;
    clubName: string;
}

interface Girone {
    position: number;
    points: number;
    club: Club;
    matches: number;
    win: number;
    draw: number;
    lose: number;
}

interface Data {
    gironeE: Girone[];
    gironeF: Girone[];
    gironeH: Girone[];
}

export default function TableGironi({ url }: Props) {

    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState<any>({})

    useEffect(() => {

        if (url === "maschile") {
            setData({

                "Girone A": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra A'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra C'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra B'
                        },
                        matches: 5,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra D'
                        },
                        matches: 5,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

                "Girone B": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra E'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra F'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra G'
                        },
                        matches: 3,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra H'
                        },
                        matches: 3,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

                "Girone C": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra I muito grande'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra J'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra K'
                        },
                        matches: 3,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra L'
                        },
                        matches: 3,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

                "Girone D": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra A'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra C'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra B'
                        },
                        matches: 5,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra D'
                        },
                        matches: 5,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

                "Girone E": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra E'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra F'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra G'
                        },
                        matches: 3,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra H'
                        },
                        matches: 3,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

                "Girone F": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra I muito grande'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra J'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra K'
                        },
                        matches: 3,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra L'
                        },
                        matches: 3,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

            })
        } else {
            setData({

                'Girone E': [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra feminile A'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra feminile C'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra feminile B'
                        },
                        matches: 5,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra feminile D'
                        },
                        matches: 5,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

                "Girone F": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra feminile E'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra feminile F'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra feminile G'
                        },
                        matches: 3,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra feminile H'
                        },
                        matches: 3,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],

                "Girone H": [

                    {
                        position: 1,
                        points: 6,
                        club: {
                            id: 1,
                            clubName: 'squadra feminile I'
                        },
                        matches: 3,
                        win: 2,
                        draw: 0,
                        lose: 1
                    },
                    {
                        position: 2,
                        points: 4,
                        club: {
                            id: 3,
                            clubName: 'squadra feminile molto lungo'
                        },
                        matches: 3,
                        win: 1,
                        draw: 1,
                        lose: 1
                    },
                    {
                        position: 3,
                        points: 2,
                        club: {
                            id: 2,
                            clubName: 'squadra feminile K'
                        },
                        matches: 3,
                        win: 0,
                        draw: 2,
                        lose: 1
                    },
                    {
                        position: 4,
                        points: 1,
                        club: {
                            id: 4,
                            clubName: 'squadra L'
                        },
                        matches: 3,
                        win: 0,
                        draw: 1,
                        lose: 2
                    },
                ],
            });
        }

    }, [url])


    return (
        <>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4'> */}
            <div className='flex flex-wrap gap-4 justify-center sm:justify-around lg:justify-center 2xl:justify-normal'>
                {Object.keys(data).map((gironeKey) => {
                    const girone = data[gironeKey as keyof Data];

                    return (

                        <div key={gironeKey} className={`mb-4  bg-bg-secondary w-full sm:w-[350px] rounded-md border`}>

                            <div className='pt-7 px-5 '>

                                <table className='w-full'>
                                    <caption className='mb-4 text-xl font-semibold text-start'>{gironeKey}</caption>
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

                                        {girone.map((girone: any, index: any) => (
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
                                :
                                null
                            }

                        </div>
                    );
                })}
            </div>
                <p className='text-[10px] font-semibold'>G=partite giocate, W=vittorie, Df=differenza reti,  Pt=punti.</p>
        </>

    )
}
