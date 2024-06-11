import { useQuery } from "@tanstack/react-query";
import client from "../client";

export default function useTeam(team_id: number) {
    const fetchTeam = async () => {
        const res = await client.get(`https://api.gsplizzana.it/api/teams/${team_id}`);
        return res.data
    }

    const { data: team, isLoading, isFetching } = useQuery(['team', team_id],
        () => fetchTeam(),
        {
            enabled: !!team_id,
            refetchOnWindowFocus: false,
            retry: false
        }
    )

    return { team, isFetching, isLoading }
}