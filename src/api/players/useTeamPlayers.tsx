import { useQuery } from '@tanstack/react-query';
import client from '../client';

export default function useTeamPlayers(teamId: number) {
    const fetchTeamPlayers = async () => {
        const res = await client.get(`https://api.gsplizzana.it/api/teams/${teamId}/members`);
        console.log(res);
        
        return res.data
    }

    const { data: teamPlayers, isLoading, isFetching } = useQuery(['teams-players'],
        () => fetchTeamPlayers(),
        { enabled: !!teamId }
    )

    return { teamPlayers, isFetching, isLoading }
}