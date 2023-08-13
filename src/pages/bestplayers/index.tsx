import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Index() {
    const [bestPlayersArray, setBestPlayersArray] = useState<any>([]);

    const getBestPlayers = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GAMESHARD_ENDPOINT}schedule`);

        // console.log(res.data);
        let tmpArray: any = [];
        res.data.data.forEach((match: any) => {
            const { home_team, away_team } = match;

            if (home_team?.best_player) {
                if (!tmpArray.find((player: any) => player.id === home_team?.best_player.id)) {
                    tmpArray.push({ ...home_team.best_player, times: 1, team_name: home_team.name, girone: match.group })
                } else {
                    const currentPlayer = tmpArray.find((listPlayer: any) => { return listPlayer.id === home_team.best_player.id });
                    const index = tmpArray.findIndex((player: any) => { return player.id === currentPlayer?.id });

                    if (index >= 0) {
                        // console.log(tmpArray[index].goals)
                        tmpArray[index].times = tmpArray[index].times + 1
                    }
                }
            }

            if (away_team?.best_player) {
                if (!tmpArray.find((player: any) => player.id === away_team?.best_player.id)) {
                    tmpArray.push({ ...away_team.best_player, times: 1, team_name: away_team.name, girone: match.group })
                } else {
                    const currentPlayer = tmpArray.find((listPlayer: any) => { return listPlayer.id === away_team.best_player.id });
                    const index = tmpArray.findIndex((player: any) => { return player.id === currentPlayer?.id });

                    if (index >= 0) {
                        // console.log(tmpArray[index].goals)
                        tmpArray[index].times = tmpArray[index].times + 1
                    }
                }
            }
            setBestPlayersArray(tmpArray);
        });
    }

    useEffect(() => {
        getBestPlayers();
    }, []);

    return (
        <>
            {
                bestPlayersArray &&
                <ul className='p-4'>
                    {
                        bestPlayersArray.map((player: any) => (
                            <div key={player.id} className='flex'>
                                <div className='flex gap-x-2 w-[700px]'>
                                    <div>{player.name}</div>
                                    <div>{player.surname}</div>
                                    -
                                    <div>{player.nickname}</div>
                                    -
                                    <div>{player.team_name}</div>
                                    -
                                </div>
                                <div>{player.girone}</div>
                                <div className='ml-4'>{player.times}</div>
                            </div>
                        ))
                    }
                </ul>
            }
        </>
    )
}
