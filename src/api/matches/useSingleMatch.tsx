import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

export default function useSchedules(id: any) {

    const url = process.env.GAMESHARD_ENDPOINT

    const fetchSchedule = async (id: any) => {
        const res = await axios.get(`https://gsplizzana.internal.devlounge.dev/api/matches/${id}`)
        return res.data.data
    }

    const { data: match, isLoading, isFetching } = useQuery(['match', id],
        () => fetchSchedule(id), {
        refetchOnWindowFocus: false,
        enabled: !!id,
        staleTime: 1000
    }
    )

    return { match, isFetching, isLoading }
}
