import LiveStream from "@/src/components/common/LiveStream";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function index() {
    const [activePage, setActivePage] = useState('male')
    const [activeBracket, setActiveBracket] = useState('')

    useEffect(() => {

        if (activePage === 'male') {
            setActiveBracket('quartiDiFinale')
        } else {
            setActiveBracket('semiFinale')
        }
    }, [activePage])

    const bracketArray: any = {
        male: {

            quartiDiFinale: [

                {
                    id: 1,
                    home: 'squadra 1',
                    guest: 'squadra 3',
                    result: ' 0 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
                {
                    id: 2,
                    home: 'squadra 2',
                    guest: 'squadra 4',
                    result: ' 2 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
                {
                    id: 3,
                    home: 'squadra 3',
                    guest: 'squadra 2',
                    result: ' 4 x 1',
                    isDone: false,
                    live: true,
                    time: '14.40'
                },
                {
                    id: 4,
                    home: 'squadra 4',
                    guest: 'squadra 1',
                    result: false,
                    isDone: false,
                    live: false,
                    time: '14.40'
                },


            ],
            semiFinale: [
                {
                    id: 6,
                    home: 'squadra 1',
                    guest: 'squadra 3',
                    result: ' 0 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
                {
                    id: 5,
                    home: 'squadra 2',
                    guest: 'squadra 4',
                    result: ' 2 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
            ],
            finale: [
                {
                    id: 7,
                    home: 'squadra 2',
                    guest: 'squadra 4',
                    result: ' 2 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
            ],
        },

        female: {

            semiFinale: [
                {
                    id: 6,
                    home: 'squadra 1 feminile',
                    guest: 'squadra 3 feminile',
                    result: ' 0 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
                {
                    id: 5,
                    home: 'squadra 2 feminile',
                    guest: 'squadra 4 feminile',
                    result: ' 2 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
            ],
            finale: [
                {
                    id: 7,
                    home: 'squadra 2 feminile',
                    guest: 'squadra 4 feminile',
                    result: ' 2 x 1',
                    isDone: true,
                    live: false,
                    time: '14.40'
                },
            ],
        },
    }

    const bracket = bracketArray[activePage]
 
    const handlePrevBracket = () => {
        const matches = Object.keys(bracket)
        const currentIndex = matches.indexOf(activeBracket)
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1
            setActiveBracket(matches[prevIndex])
        }
    }


    const handleNextBracket = () => {
        const matches = Object.keys(bracket)
        const currentIndex = matches.indexOf(activeBracket)
        if (currentIndex < matches.length - 1) {
            const nextIndex = currentIndex + 1
            setActiveBracket(matches[nextIndex])
        }
    }


    return (
        <>
            <section className='max-w-container 2xl:max-w-container-xl py-16 mx-auto px-4'>

                <h2 className="text-2xl font-bold">Bracket del torneo</h2>

                {/* maschile and feminile switch */}
                <div className="flex justify-around border-2 rounded border-primary-dark mt-8">
                    <div onClick={() => { setActivePage('male') }} className={`font-semibold ${activePage === "male" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'} w-1/2 text-center py-2`} >Maschili</div>
                    <div onClick={() => { setActivePage('female') }} className={`font-semibold ${activePage === "female" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'}  w-1/2 text-center py-2 `} >Feminili</div>
                </div>


                {/* slider */}
                <div className=" max-w-container  2xl:max-w-container-xl mx-auto">

                    {/* buttons */}
                    <div className="flex justify-between items-center mt-8">

                        {/* prev burron */}
                        <div onClick={() => { handlePrevBracket() }} className={`${Object.keys(bracket).indexOf(activeBracket) === 0 ? "opacity-50" : null}`}>
                            <img src="/static/chevron-left.svg" alt="" />
                        </div>

                        {/* current bracket */}
                        <div className=" text-2xl font-bold ">{activeBracket}</div>

                        {/* next button */}
                        <div onClick={() => { handleNextBracket() }} >
                            <img src="/static/chevron-right.svg" alt="" />
                        </div>
                    </div>

                    {/* slider container */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6  mx-auto">

                        {bracket[activeBracket] && bracket[activeBracket].map((match: any) => {
                            //console.log(match);
                            return (

                                <div key={match.id} className={`bg-bg-secondary w-[350px] place-self-center border ${match.live ? 'border-primary-dark' : null} rounded-md`}>
                                    <div className="divide-y-2 px-4 py-2" >

                                        <div className="flex justify-between py-4 px-2">
                                            <div className="flex items-center gap-x-2">
                                                <img src="/static/ellipse_2.svg" alt="" />
                                                <p>{match.home}</p>
                                            </div>
                                            <p>1</p>
                                        </div>

                                        <div className="flex justify-between py-4 px-2">
                                            <div className="flex items-center gap-x-2">
                                                <img src="/static/ellipse_2.svg" alt="" />
                                                <p>{match.guest}</p>
                                            </div>
                                            <p>2</p>
                                        </div>
                                    </div>
                                    <div className="border-t">
                                        <div className="p-4 text-center">

                                            <Link href={`/dettaglioPartita/${match.id}`} className="text-primary-dark text-sm font-semibold" > Dettagli partita</Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
            <LiveStream />
        </>
    )
}