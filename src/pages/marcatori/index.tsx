import { GoalsList } from "@/src/components/common/GoalsList";
import LiveStream from "@/src/components/common/LiveStream";
import { Title } from "@/src/components/common/Title";
import axios from "axios"
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Index() {
    const [maleGoalsList, setMaleGoalsList] = useState<any>([]);
    const [femaleGoalsList, setFemaleMaleGoalsList] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<any>([]);
    const [activeComp, setActiveComp] = useState<string>('maschile');
    const [mascArray, setMascArray] = useState<any>([]);
    const [femArray, setFemArray] = useState<any>([]);

    const maleSlicedArray = maleGoalsList.slice(0, 20);
    const femaleSlicedArray = femaleGoalsList.slice(0, 20);

    const compare = (a: any, b: any) => {
        if (a.goals > b.goals) {
            return -1;
        }
        if (a.goals < b.goals) {
            return 1;
        }
        return 0;
    }

    const getGoalList = async () => {
        setIsLoading(true);
        if (activeComp === 'maschile') {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${1}/fixtures`, { params: { per_page: 1000 } });
            const res1 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${9}/fixtures`, { params: { per_page: 1000 } });
            const res2 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${10}/fixtures`, { params: { per_page: 1000 } });
            const res3 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${11}/fixtures`, { params: { per_page: 1000 } });
            const res4 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${12}/fixtures`, { params: { per_page: 1000 } });
            const res5 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${13}/fixtures`, { params: { per_page: 1000 } });
            const res6 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${18}/fixtures`, { params: { per_page: 1000 } });
            setMascArray([...res?.data.data, ...res1?.data.data, ...res2?.data.data, ...res3?.data.data, ...res4?.data.data, ...res5?.data.data]);
        } else {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${2}/fixtures`, { params: { per_page: 1000 } });
            const res1 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${3}/fixtures`, { params: { per_page: 1000 } });
            const res2 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${4}/fixtures`, { params: { per_page: 1000 } });
            const res3 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${5}/fixtures`, { params: { per_page: 1000 } });
            const res4 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${14}/fixtures`, { params: { per_page: 1000 } });
            const res5 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${15}/fixtures`, { params: { per_page: 1000 } });
            const res6 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${17}/fixtures`, { params: { per_page: 1000 } });
            const res7 = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${16}/fixtures`, { params: { per_page: 1000 } });
            setFemArray([...res?.data.data, ...res1?.data.data, ...res2?.data.data, ...res3?.data.data, ...res4?.data.data, ...res5?.data.data, ...res6?.data.data, ...res7?.data.data]);
        }
        setIsLoading(false);
        // console.log([...res?.data.data, ...res1?.data.data, ...res2?.data.data, ...res3?.data.data, ...res4?.data.data, ...res5?.data.data]);
    }

    const getGoal = async () => {
        setIsLoading(true);
        // const res = await axios.get(`${process.env.NEXT_PUBLIC_GAMESHARD_ENDPOINT}schedule`);

        // console.log(res.data);
        let tmp2 = [];
        if (activeComp === 'maschile') {
            tmp2 = mascArray;
        } else {
            tmp2 = femArray;
        }
        let tmpArray: any = [];
        tmp2.forEach((match: any) => {
            const { home_team, away_team } = match;
            const { players: home_players } = home_team;
            const { players: away_players } = away_team;

            // console.log(away_players);
            // const matcha = res.data.data.find((matcha: any) => { return matcha.id === 27 });

            away_players?.forEach((away_player: any) => {
                const { goals } = away_player;

                // console.log(away_player);
                if (away_player.length > 0 || (Object.keys(away_player).length > 0 && away_player.constructor === Object)) {
                    // console.log(currentPlayer);
                    const currentPlayer = tmpArray.find((listPlayer: any) => { return listPlayer.id === away_player.id });
                    if (currentPlayer === undefined) {
                        tmpArray.push({ ...away_player, team_name: away_team.name, team_group: match.group });
                    } else {
                        const currentPlayer = tmpArray.find((listPlayer: any) => { return listPlayer.id === away_player.id });
                        const index = tmpArray.findIndex((player: any) => { return player.id === currentPlayer?.id });

                        if (index >= 0) {
                            // console.log(tmpArray[index].goals)
                            tmpArray[index].goals = tmpArray[index].goals + goals
                        }
                    }
                } else {
                }
            });

            home_players?.forEach((home_players: any) => {
                const { goals } = home_players;
                // console.log(goals);

                // console.log(home_players);
                if (home_players.length > 0 || (Object.keys(home_players).length > 0 && home_players.constructor === Object)) {
                    // console.log(currentPlayer);
                    const currentPlayer = tmpArray.find((listPlayer: any) => { return listPlayer.id === home_players.id });
                    if (currentPlayer === undefined) {
                        tmpArray.push({ ...home_players, team_name: home_team.name, team_group: match.group });
                    } else {
                        const currentPlayer = tmpArray.find((listPlayer: any) => { return listPlayer.id === home_players.id });
                        const index = tmpArray.findIndex((player: any) => { return player.id === currentPlayer?.id });
                        // console.log(currentPlayer.goals);
                        // console.log(index);
                        if (index >= 0) {
                            tmpArray[index].goals = tmpArray[index].goals + goals
                        }
                    }
                } else {
                }
            });
        });
        // const arrMaschile = tmpArray.filter((player: any) => player.team_group.startsWith('M'));
        // const arrFemminile = tmpArray.filter((player: any) => player.team_group.startsWith('F'));

        if (activeComp === 'maschile') {
            const maleReorderedArray = tmpArray.sort(compare);
            setMaleGoalsList(maleReorderedArray);
        } else {
            const femaleReorderedArray = tmpArray.sort(compare);
            setFemaleMaleGoalsList(femaleReorderedArray);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (mascArray?.length > 0 || femArray?.length > 0) {
            getGoal();
        }
    }, [mascArray, femArray]);

    useEffect(() => {
        getGoalList();
    }, [activeComp]);

    return (
        <>
            <div className='max-w-container 2xl:max-w-container-xl mx-auto px-4 mb-20'>
                <div className="pt-10">
                    <Title variant={Title.variant.primary}>Classifica <span className="text-primary">marcatori</span></Title>
                    {/* <p className="mt-8">E anche quest’anno per il torneo maschile ci sono 8 giorni da 4 squadre ciascuno e per il torneo femminile ci sono 4 gironi da 4 squadre. In aggiunta è stato organizzato anche un girone Rookie per agevolare le squadre new entry.</p> */}
                </div>

                <div className="flex justify-around border-2 rounded border-primary-dark cursor-pointer mt-4">
                    <div onClick={() => setActiveComp('maschile')} className={`font-semibold ${activeComp === "maschile" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'} w-1/2 text-center py-2`}>Maschile</div>
                    <div onClick={() => setActiveComp('femminile')} className={`font-semibold ${activeComp === "femminile" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'}  w-1/2 text-center py-2 `}>Femminile</div>
                </div>

                {isLoading && <Skeleton count={5} className='mt-2' height={35} />}

                {
                    !isLoading &&
                    <GoalsList array={activeComp === 'maschile' ? maleGoalsList : femaleGoalsList} />
                }

            </div>

            <LiveStream />
        </>
    )
}
