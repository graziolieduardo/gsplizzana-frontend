import client from '@/src/api/client';
import React, { useState } from 'react'

type Player = {
    id: number,
    name: string,
    date_of_birth: string,
    lastname: string,
    nickname: string,
    phone: string,
    email: string,
    instagram: string,
    rookie: string,
    is_captain: string,
    is_vice_captain: string,
}

type Team = {
    id: number,
    name: string,
    captain: number,
    vice_captain: number,
    category: string,
    edition: string,
    token: string,
    players: Player[]
}

export default function Index() {
    const [token, setToken] = useState();
    const [team, setTeam] = useState<Team>();

    const handleTokenChange = (e: any) => {
        setToken(e.target.value);
    }

    const getTeam = async () => {
        const params = {
            token
        }
        const res = await client.get('teams', { params });

        // console.log(res);
        setTeam(res.data.team);
    }

    return (
        <div className='max-w-container 2xl:max-w-container-xl mx-auto px-6 py-6'>
            <div className='flex flex-col mb-8'>
                <label className='font-semibold text-sm' htmlFor="name">Inserisci il token per cercare una squadra</label>
                <div className='flex items-center gap-x-2'>
                    <input
                        // {...register("name", { required: '- questo campo è obbligatorio' })}
                        className='w-2/3 border rounded p-3 mt-1'
                        placeholder='Inserisci token'
                        type="text"
                        id='name'
                        value={token}
                        onChange={(e) => handleTokenChange(e)}
                    />
                    <button
                        onClick={getTeam}
                        className="block rounded-full bg-gradient-to-r from-primary-dark to-primary w-40 py-2.5 text-white lg:mr-2"
                    >
                        Cerca
                    </button>
                </div>
            </div>

            {
                team ?
                <>
                    <div className='mb-2 space-y-2'>
                        <div className='text-3xl'>{team?.name}</div>

                        <div className='flex items-center gap-x-2'>
                            <div>ID:</div>
                            <div className='text-secondary font-light'>{team?.id}</div>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <div>Categoria:</div>
                            <div className='text-secondary font-light'>{team?.category}</div>
                        </div>
                    </div>

                    <div>
                        <div className='mb-2'>Giocatori:</div>
                        <table className='border border-secondary rounded'>
                            <thead>
                                <tr>
                                    <td className='p-2 border border-secondary bg-gray-200'>Nome</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Cognome</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Soprannome</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Data di nascita</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Telefono</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Email</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Instagram</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Rookie</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Capitano</td>
                                    <td className='p-2 border border-secondary bg-gray-200'>Vice-capitano</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    team && team.players.map((player: Player) => (
                                        <tr key={player?.id}>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.name}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.lastname}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.nickname}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.date_of_birth}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.phone}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.email}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.instagram}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.rookie ? 'no' : 'sì'}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.is_captain ? 'sì' : 'no'}</td>
                                            <td className='border border-secondary p-2 first-letter:uppercase font-light'>{player?.is_vice_captain ? 'sì' : 'no'}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </>
                :
                <div>
                    Nessuna squadra per il token inserito
                </div>
            }

        </div>
    )
}
