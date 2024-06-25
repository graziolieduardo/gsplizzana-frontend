import client from "@/src/api/client"
import { useEffect, useState } from "react";

const Teams = () => {
    const [teams, setTeams] = useState([]);

    const getTeams = async () => {
        const res: any = await client.get('hidden-teams');
        // console.log(res.data.teams);
        setTeams(res.data.teams);
    }

    useEffect(() => {
        getTeams();
    }, []);

    return (
        <div className="p-6">
            <table className='border border-secondary rounded'>
                <thead>
                    <tr>
                        <td className='p-2 border border-secondary bg-gray-200'>Nome squadra</td>
                        <td className='p-2 border border-secondary bg-gray-200'>Categoria</td>
                        <td className='p-2 border border-secondary bg-gray-200'>token</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        teams && teams.map((team: any) => (
                            <tr key={team?.id}>
                                <td className='border border-secondary p-2 first-letter:uppercase font-light'>{team?.name}</td>
                                <td className='border border-secondary p-2 first-letter:uppercase font-light'>{team?.category}</td>
                                <td className='border border-secondary p-2 first-letter:uppercase font-light'>{team?.token}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Teams;
