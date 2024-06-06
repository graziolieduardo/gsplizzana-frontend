import { useMutation } from '@tanstack/react-query';
import client from '../client';

export default function useAddTeamPlayer() {

    //params is reciving an object with "d" and "teamId"
    const addTeamPlayer = useMutation(async (params:any) => {
        console.log(params);        

        return await client.post(`https://api.gsplizzana.it/api/user/teams/${params.teamId}/members`, params.d);

    });

    return { addTeamPlayer }
}