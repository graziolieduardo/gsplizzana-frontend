import { useQuery } from "@tanstack/react-query";
import client from "../client";

export default function useTeams() {
    const fetchTeams = async () => {
        const res = await client.get(`https://api.gsplizzana.it/api/teams`);
        return res.data
    }

    const { data: teams, isLoading, isFetching } = useQuery(['teams'],
        () => fetchTeams(),
        {
            refetchOnWindowFocus: false,
            retry: false
        }
    )

    return { teams, isFetching, isLoading }
}