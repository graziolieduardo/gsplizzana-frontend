import React from 'react'

export const GoalsList = ({ array }: any) => {
    console.log(array);

    return (
        <div className='bg-white min-w-[330px] sm:min-w-[430px] py-4 rounded mb-10'>
            <div className='tex-2xl font-bold py-2 space-y-2'>
                {
                    array.length > 0 && array.map((player: any, index: 0) => (
                        <div key={player.id}>
                            {
                                player.goals > 0 &&
                                <div className="flex items-center gap-x-2 uppercase text-xs">
                                    <div>
                                        {index + 1}
                                    </div>
                                    <div className="flex justify-between items-center border rounded p-2 flex-1">
                                        <div className="space-x-2">
                                            <span>{player.name} {player.surname}</span>
                                            <span>-</span>
                                            <span>{player.nickname}</span>
                                            <span>({player.team_name})</span>
                                        </div>
                                        <span className='ml-2'>{player.goals}</span>
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                }

                {
                    !array.find((player: any) => player.goals > 0) &&
                    <div>Nessun goal</div>
                }
            </div>
        </div>
    )
}
