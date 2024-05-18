import { useQuery } from '@tanstack/react-query';
import client from '../client';

export default function useTeamPlayers(teamId: number) {
    const fetchTeamPlayers = async () => {
        const res = await client.get(`http://api.gsplizzana.it/api/user/teams/${teamId}/members`);
        return res.data
    }

    const { data: teamPlayers, isLoading, isFetching } = useQuery(['teams-players'],
        () => fetchTeamPlayers(),
        { enabled: !!teamId }
    )

    return { teamPlayers, isFetching, isLoading }
}