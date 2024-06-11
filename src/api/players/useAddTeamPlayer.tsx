import { useMutation } from '@tanstack/react-query';
import client from '../client';

export default function useAddTeamPlayer() {
    const addTeamPlayer = useMutation(async (params: any) => {
        return await client.post(`https://api.gsplizzana.it/api/user/teams/${params.teamId}/members`, params.d);
    });

    return { addTeamPlayer }
}