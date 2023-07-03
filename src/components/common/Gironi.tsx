import React, { useEffect, useState } from 'react'
import TableProva from './TableProva'

type Props = any

export default function Gironi({ url }: Props) {

    const [data, setData] = useState<any>({})

    useEffect(() => {

        //to simulate fetched data
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
        } else if (url === 'feminile') {
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

                // "Girone I": [

                //     {
                //         position: 1,
                //         points: 6,
                //         club: {
                //             id: 1,
                //             clubName: 'squadra feminile I'
                //         },
                //         matches: 3,
                //         win: 2,
                //         draw: 0,
                //         lose: 1
                //     },
                //     {
                //         position: 2,
                //         points: 4,
                //         club: {
                //             id: 3,
                //             clubName: 'squadra feminile molto lungo'
                //         },
                //         matches: 3,
                //         win: 1,
                //         draw: 1,
                //         lose: 1
                //     },
                //     {
                //         position: 3,
                //         points: 2,
                //         club: {
                //             id: 2,
                //             clubName: 'squadra feminile K'
                //         },
                //         matches: 3,
                //         win: 0,
                //         draw: 2,
                //         lose: 1
                //     },
                //     {
                //         position: 4,
                //         points: 1,
                //         club: {
                //             id: 4,
                //             clubName: 'squadra L'
                //         },
                //         matches: 3,
                //         win: 0,
                //         draw: 1,
                //         lose: 2
                //     },
                //  ],
            });
        }

    }, [url])



    return (
        <>
            
            <div className='flex flex-wrap justify-center xl:justify-normal items-start sm:gap-x-4'>
                {Object.keys(data).map((girone: any) => (

                    <TableProva key={girone} data={data} girone={girone} />
                ))}


            </div>
            <p className='text-[10px] font-semibold'>G=partite giocate, W=vittorie, Df=differenza reti,  Pt=punti.</p>
        </>

    )
}
