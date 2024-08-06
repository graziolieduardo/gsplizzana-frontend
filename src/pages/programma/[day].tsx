import useSchedules from '@/src/api/schedule/useSchedules';
import { Button } from '@/src/components/common/Button';
import DetaglioPartita_2 from '@/src/components/common/DetaglioPartita_2';
import LiveStream from '@/src/components/common/LiveStream';
import Programma from '@/src/components/common/Programma';
import { Title } from '@/src/components/common/Title';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Index() {
    const [nextDay, setNextDay] = useState<string | null>(null);
    const [prevDay, setPrevDay] = useState<string | null>(null);
    const [schedule, setSchedule] = useState<any>([]);

    const router = useRouter();
    const { day } = router.query;

    // const { schedule, isLoading } = useSchedules({ day });

    const program = [
        [
            // 22
            {
                id: 1,
                home_team: ' SdrumALA	',
                away_team: '	A.C. Denti	 ',
                scheduled_at: ' 16:00'
            },
            {
                id: 2,
                home_team: ' Prese in giro	',
                away_team: '	Beerbantelle	 ',
                scheduled_at: ' 16:20'
            },
            {
                id: 3,
                home_team: ' Sailor Mone	',
                away_team: '	Le Balle(rine) in fiesta	 ',
                scheduled_at: ' 16:40'
            },
            {
                id: 4,
                home_team: ' Nazionale Ferrovieri	',
                away_team: '	Herta Vernello	 ',
                scheduled_at: ' 17:00'
            },
            {
                id: 5,
                home_team: ' Hellas Ma-donne	',
                away_team: '	Lemonade	 ',
                scheduled_at: ' 17:20'
            },
            {
                id: 6,
                home_team: ' Sala giardini	',
                away_team: '	Sbarx	 ',
                scheduled_at: ' 17:40'
            },
            {
                id: 7,
                home_team: ' Drim Tim	',
                away_team: '	A.C. Campate	 ',
                scheduled_at: ' 18:00'
            },
            {
                id: 8,
                home_team: ' i Montagna	',
                away_team: '	Bayern Mona	 ',
                scheduled_at: ' 18:20'
            },
            {
                id: 9,
                home_team: ' Fc Wanda Tim	',
                away_team: '	FC. Stallions	 ',
                scheduled_at: ' 18:40'
            },
            {
                id: 10,
                home_team: ' Sughi ebbasta	',
                away_team: '	La Contea FC	 ',
                scheduled_at: ' 19:00'
            },
            {
                id: 11,
                home_team: ' F.C. Julia	',
                away_team: '	Vigili del Fusto	 ',
                scheduled_at: ' 19:20'
            },
            {
                id: 12,
                home_team: ' Avanzi	',
                away_team: '	U.S. Guarna	 ',
                scheduled_at: ' 19:40'
            },
            {
                id: 13,
                home_team: ' Modium	',
                away_team: '	FC. Stallions	 ',
                scheduled_at: ' 21:00'
            },
            {
                id: 14,
                home_team: ' Torte di Mele	',
                away_team: '	Tette Biscottate	 ',
                scheduled_at: ' 21:20'
            },
            {
                id: 15,
                home_team: ' FC Savignano	',
                away_team: '	SdrumALA	 ',
                scheduled_at: ' 21:40'
            },
            {
                id: 16,
                home_team: ' Sala giardini	',
                away_team: '	FC Schalke 104	 ',
                scheduled_at: ' 22:00'
            },
            {
                id: 17,
                home_team: ' Le Gamberine	',
                away_team: '	Peccamin(osè)	 ',
                scheduled_at: ' 22:20'
            },
            {
                id: 18,
                home_team: ' Green Passere	',
                away_team: '	Wanditas	 ',
                scheduled_at: ' 22:40'
            },
            {
                id: 19,
                home_team: ' Mai Una Gioia	',
                away_team: '	Clitoriders	 ',
                scheduled_at: ' 23:00'
            },
            {
                id: 20,
                home_team: ' Pinguini Trentini	',
                away_team: '	Demobusters	 ',
                scheduled_at: ' 23:20'
            },
            {
                id: 21,
                home_team: ' Lovebusters	',
                away_team: '	Tette Biscottate	 ',
                scheduled_at: ' 23:40'
            },
            {
                id: 22,
                home_team: ' RSA United	',
                away_team: '	Fc Wanda Tim ',
                scheduled_at: ' 	0:00'
            }
        ],
        // 25
        [
            {
                id: 23,
                home_team: ' Sailor Mone	',
                away_team: '	Beerbantelle	 ',
                scheduled_at: ' 15:00'
            },
            {
                id: 24,
                home_team: ' MediaserT	',
                away_team: '	U.S. Guarna	 ',
                scheduled_at: ' 15:20'
            },
            {
                id: 25,
                home_team: ' I Magnifici	',
                away_team: '	Bayern Mona	 ',
                scheduled_at: ' 15:40'
            },
            {
                id: 26,
                home_team: ' Bone ma poche	',
                away_team: '	Gin toniche	 ',
                scheduled_at: ' 16:00'
            },
            {
                id: 27,
                home_team: ' Peccamin(osè)	',
                away_team: '	Green Passere	 ',
                scheduled_at: ' 16:20'
            },
            {
                id: 28,
                home_team: ' Sbarx	',
                away_team: '	Demobusters	 ',
                scheduled_at: ' 16:40'
            },
            {
                id: 29,
                home_team: ' A.C. Campate	',
                away_team: '	Lovebusters	 ',
                scheduled_at: ' 17:00'
            },
            {
                id: 30,
                home_team: ' Beerbantelle	',
                away_team: '	Le Balle(rine) in fiesta	 ',
                scheduled_at: ' 17:20'
            },
            {
                id: 31,
                home_team: ' Sailor Mone	',
                away_team: '	Prese in giro	 ',
                scheduled_at: ' 17:40'
            },
            {
                id: 32,
                home_team: ' Fel Lazio	',
                away_team: '	F.C. Gorillaz	 ',
                scheduled_at: ' 18:00'
            },
            {
                id: 33,
                home_team: ' i Montagna	',
                away_team: '	I Magnifici	 ',
                scheduled_at: ' 18:20'
            },
            {
                id: 34,
                home_team: ' Bone ma poche	',
                away_team: '	Hellas Ma-donne	 ',
                scheduled_at: ' 18:40'
            },
            {
                id: 35,
                home_team: ' Shark Attack	',
                away_team: '	Avanzi	 ',
                scheduled_at: ' 19:00'
            },
            {
                id: 36,
                home_team: ' CGB Gamberoni	',
                away_team: '	FC Schalke 104	 ',
                scheduled_at: ' 19:20'
            },
            {
                id: 37,
                home_team: ' Pinguini Trentini	',
                away_team: '	RSA United	 ',
                scheduled_at: ' 19:40'
            },
            {
                id: 38,
                home_team: ' F.C. Gorillaz	',
                away_team: '	FC. Stallions	 ',
                scheduled_at: ' 21:00'
            },
            {
                id: 39,
                home_team: ' Clandes-Team	',
                away_team: '	Vigili del Fusto	 ',
                scheduled_at: ' 21:20'
            },
            {
                id: 40,
                home_team: ' F.C. Julia	',
                away_team: '	Sughi ebbasta	 ',
                scheduled_at: ' 21:40'
            },
            {
                id: 41,
                home_team: ' Torte di Mele	',
                away_team: '	Lovebusters	 ',
                scheduled_at: ' 22:00'
            },
            {
                id: 42,
                home_team: ' Le Gamberine	',
                away_team: '	Wanditas	 ',
                scheduled_at: ' 22:20'
            },
            {
                id: 43,
                home_team: ' Bayern Mona	',
                away_team: '	A.C. Denti	 ',
                scheduled_at: ' 22:40'
            },
            {
                id: 44,
                home_team: ' Shark Attack	',
                away_team: '	Modium	 ',
                scheduled_at: ' 23:00'
            },
            {
                id: 45,
                home_team: ' i Montagna	',
                away_team: '	MediaserT	 ',
                scheduled_at: ' 23:20'
            },
            {
                id: 46,
                home_team: ' Hellas Madonna	',
                away_team: '	CGB Gamberoni	 ',
                scheduled_at: ' 23:40'
            },
            {
                id: 47,
                home_team: ' Mai Una Gioia	',
                away_team: '	Herta Vernello ',
                scheduled_at: ' 	0:00'
            }
        ],
        // 18
        [
            {
                id: 48,
                home_team: ' Mai Una Gioia	',
                away_team: '	Sughi ebbasta	 ',
                scheduled_at: ' 16:00'
            },
            {
                id: 49,
                home_team: ' Drim Tim	',
                away_team: '	Torte di Mele	 ',
                scheduled_at: ' 16:20'
            },
            {
                id: 50,
                home_team: ' Bone ma poche	',
                away_team: '	Lemonade	 ',
                scheduled_at: ' 16:40'
            },
            {
                id: 51,
                home_team: ' SdrumALA	',
                away_team: '	Clandes-Team	 ',
                scheduled_at: ' 17:00'
            },
            {
                id: 52,
                home_team: ' RSA United	',
                away_team: '	Nazionale Ferrovieri	 ',
                scheduled_at: ' 17:20'
            },
            {
                id: 53,
                home_team: ' U.S. Guarna	',
                away_team: '	Demobusters	 ',
                scheduled_at: ' 17:40'
            },
            {
                id: 54,
                home_team: ' MediaserT	',
                away_team: '	F.C. Gorillaz	 ',
                scheduled_at: ' 18:00'
            },
            {
                id: 55,
                home_team: ' I Magnifici	',
                away_team: '	La Contea FC	 ',
                scheduled_at: ' 18:20'
            },
            {
                id: 56,
                home_team: ' Pinguini Trentini	',
                away_team: '	Fel Lazio	 ',
                scheduled_at: ' 18:40'
            },
            {
                id: 57,
                home_team: ' Hellas Madonna	',
                away_team: '	Bayern Mona	 ',
                scheduled_at: ' 19:00'
            },
            {
                id: 58,
                home_team: ' Clitoriders	',
                away_team: '	Sala giardini	 ',
                scheduled_at: ' 19:20'
            },
            {
                id: 59,
                home_team: ' Shark Attack		',
                away_team: '	Fc Wanda Tim	 ',
                scheduled_at: ' 19:40'
            },
            {
                id: 60,
                home_team: ' CGB Gamberoni	',
                away_team: '	Clandes-Team	 ',
                scheduled_at: ' 21:00'
            },
            {
                id: 61,
                home_team: ' Green Passere	',
                away_team: '	Le Gamberine	 ',
                scheduled_at: ' 21:20'
            },
            {
                id: 62,
                home_team: ' Modium	',
                away_team: '	F.C. Julia	 ',
                scheduled_at: ' 21:40'
            },
            {
                id: 63,
                home_team: ' Drim Tim	',
                away_team: '	Tette Biscottate	 ',
                scheduled_at: ' 22:00'
            },
            {
                id: 64,
                home_team: ' FC Savignano	',
                away_team: '	Sbarx	 ',
                scheduled_at: ' 22:20'
            },
            {
                id: 65,
                home_team: ' Herta Vernello	',
                away_team: '	FC Schalke 104	 ',
                scheduled_at: ' 22:40'
            }
        ],
        // 27
        [
            {
                id: 66,
                home_team: ' i Montagna	',
                away_team: '	Hellas Madonna	 ',
                scheduled_at: ' 10:00'
            },
            {
                id: 67,
                home_team: ' F.C. Julia	',
                away_team: '	I Magnifici	 ',
                scheduled_at: ' 10:20'
            },
            {
                id: 68,
                home_team: ' La Contea FC	',
                away_team: '	Fc Wanda Tim	 ',
                scheduled_at: ' 10:40'
            },
            {
                id: 69,
                home_team: ' Shark Attack	',
                away_team: '	Clandes-Team	 ',
                scheduled_at: ' 11:00'
            },
            {
                id: 70,
                home_team: ' MediaserT	',
                away_team: '	A.C. Denti	 ',
                scheduled_at: ' 11:20'
            },
            {
                id: 71,
                home_team: ' Hellas Ma-donne	',
                away_team: '	Gin toniche	 ',
                scheduled_at: ' 11:40'
            },
            {
                id: 72,
                home_team: ' Mai Una Gioia	',
                away_team: '	Nazionale Ferrovieri	 ',
                scheduled_at: ' 12:00'
            },
            {
                id: 73,
                home_team: ' Drim Tim	',
                away_team: '	Lovebusters	 ',
                scheduled_at: ' 12:20'
            },
            {
                id: 74,
                home_team: ' Demobusters	',
                away_team: '	Vigili del Fusto	 ',
                scheduled_at: ' 12:40'
            },
            {
                id: 75,
                home_team: ' Clitoriders	',
                away_team: '	FC Schalke 104	 ',
                scheduled_at: ' 13:00'
            },
            {
                id: 76,
                home_team: ' Pinguini Trentini	',
                away_team: '	FC Savignano	 ',
                scheduled_at: ' 13:20'
            },
            {
                id: 77,
                home_team: ' Avanzi	',
                away_team: '	Fel Lazio	 ',
                scheduled_at: ' 13:40'
            },
            {
                id: 78,
                home_team: ' U.S. Guarna	',
                away_team: '	F.C. Gorillaz	 ',
                scheduled_at: ' 15:00'
            },
            {
                id: 79,
                home_team: ' Tette Biscottate	',
                away_team: '	A.C. Campate	 ',
                scheduled_at: ' 15:20'
            },
            {
                id: 80,
                home_team: ' A.C. Campate	',
                away_team: '	Lovebusters	 ',
                scheduled_at: ' 15:40'
            },
            {
                id: 81,
                home_team: ' RSA United	',
                away_team: '	Sala giardini	 ',
                scheduled_at: ' 16:00'
            },
            {
                id: 82,
                home_team: ' Prese in giro	',
                away_team: '	Le Balle(rine) in fiesta	 ',
                scheduled_at: ' 16:20'
            },
            {
                id: 83,
                home_team: ' Fel Lazio	',
                away_team: '	A.C. Denti	 ',
                scheduled_at: ' 16:40'
            },
            {
                id: 84,
                home_team: ' Peccamin(osè)	',
                away_team: '	Wanditas	 ',
                scheduled_at: ' 17:00'
            },
            {
                id: 85,
                home_team: ' Gin toniche	',
                away_team: '	Lemonade	 ',
                scheduled_at: ' 17:20'
            },
            {
                id: 86,
                home_team: ' FC Savignano	',
                away_team: '	Vigili del Fusto	 ',
                scheduled_at: ' 17:40'
            },
            {
                id: 87,
                home_team: ' Clitoriders	',
                away_team: '	CGB Gamberoni	 ',
                scheduled_at: ' 18:00'
            },
            {
                id: 88,
                home_team: ' Nazionale Ferrovieri	',
                away_team: '	Sbarx	 ',
                scheduled_at: ' 18:20'
            },
            {
                id: 89,
                home_team: ' Sughi ebbasta	',
                away_team: '	Herta Vernello	 ',
                scheduled_at: ' 18:40'
            },
            {
                id: 90,
                home_team: ' Avanzi	',
                away_team: '	FC. Stallions	 ',
                scheduled_at: ' 19:00'
            },
            {
                id: 91,
                home_team: ' Modium	',
                away_team: '	La Contea FC	 ',
                scheduled_at: ' 19:20'
            },
            {
                id: 92,
                home_team: ' Hellas Madonna	',
                away_team: '	SdrumALA	 ',
                scheduled_at: ' 19:40'
            }
        ]
    ]

    useEffect(() => {

        if (day === 'mercoledì') {
            setNextDay('giovedì');
            setPrevDay(null);
            setSchedule(program[0]);
        } else if (day === 'giovedì') {
            setNextDay('venerdì');
            setPrevDay('mercoledì');
            setSchedule(program[1]);
        } else if (day === 'venerdì') {
            setNextDay('sabato');
            setPrevDay('giovedì');
            setSchedule(program[2]);
        } else if (day === 'sabato') {
            // setNextDay('domenica');
            setNextDay(null);
            setPrevDay('venerdì');
            setSchedule(program[3]);
        } 
        // else if (day === 'domenica') {
        //     setNextDay(null);
        //     setPrevDay('sabato');
        // }
    }, [day]);

    return (
        <>
            {/* page title  */}
            <div className='max-w-container 2xl:max-w-container-xl mx-auto px-4'>

                <div className="flex gap-x-2 ">
                    <div className="md:w-1/2 pt-10 pb-10 px-4">
                        <Title variant={Title.variant.primary}>Scopri il <span className="text-primary">programma</span> completo</Title>
                        <p className="mt-8 font-light text-text-subtle">Non perderti le partite, rimani aggiornato oppure seguile in diretta.</p>
                    </div>
                    {/* <div className="hidden md:block md:w-1/2 h-[500px] bg-gray-200"></div> */}
                </div>

                <div className='mb-6'>
                    <Button className='p-2 ml-4' link={'#agenda'} variant={Button.variant.primary}>Orario partite</Button>
                </div>
            </div>

            {/* programma section */}
            <Programma />

            {/* agenda section */}
            <section id='agenda' className='max-w-container 2xl:max-w-container-xl mx-auto px-4'>
                <div className='py-8'>
                    <h2 className='text-2xl font-bold'>Agenda partite</h2>
                    <h2 className='text-2xl font-bold'>Torneo Calcioshplash</h2>

                    <div id='scrollContainer' className='flex overflow-auto'>

                        {/* slider */}
                        <div className='min-w-full px-1'>
                            <div className='flex justify-between items-center mt-8 pb-3 border-b-2'>

                                {/* prev button */}
                                {/* <Link className='border-2 border-primary-dark rounded' href={`/programma/${prevDay}`} shallow={true}>
                                    <img className='w-8 cursor-pointer' src="/static/chevron-left.svg" alt="" />
                                </Link> */}
                                {/* <div onClick={() => { router.push(`/programma/${prevDay}`, undefined, { shallow: true }) }}> */}
                                <button className={`${prevDay === null ? 'cursor-not-allowed' : 'cursor-pointer'} border-2 border-primary-dark rounded`} disabled={prevDay === null ? true : false} onClick={() => { router.push(`/programma/${prevDay}`, undefined, { shallow: true }) }}>
                                    <img className='w-8' src="/static/chevron-left.svg" alt="" />
                                </button>
                                {/* </div> */}

                                {/* middle text for the active item */}
                                <div className=' text-center capitalize flex items-baseline gap-x-4'>
                                    <h2 className='text-2xl font-semibold'>{day}</h2>
                                    {/* <span>{Days.day as keyof Days }</span> */}
                                </div>

                                {/* next button */}
                                <button className={`${nextDay === null ? 'cursor-not-allowed' : ''} border-2 border-primary-dark rounded`} disabled={nextDay === null ? true : false} onClick={() => { router.push(`/programma/${nextDay}`, undefined, { shallow: true }) }}>
                                    {/* <button className={`${nextDay === null ? 'cursor-not-allowed' : ''} border-2 border-primary-dark rounded ${nextDay === null ? 'border-gray-300' : ''}`} disabled={nextDay === null ? true : false} onClick={() => { router.push(`/programma/${nextDay}`, undefined, { shallow: true }) }}> */}
                                    <img className='w-8 cursor-pointer text-gray-300' src="/static/chevron-right.svg" alt="" />
                                </button>
                            </div>

                            {schedule && schedule?.map((match: any) => {
                                return (
                                    <div key={match.id} className='mt-8'>
                                        <DetaglioPartita_2 data={match} />
                                    </div>
                                )
                            })}


                            {/* {isLoading && <Skeleton count={5} className='mt-8' height={70} />} */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <LiveStream /> */}
        </>
    )
}
