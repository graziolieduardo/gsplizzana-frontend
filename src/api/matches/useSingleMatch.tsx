import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

export default function useSingleMatch(id: any, group_id: any) {

    const url = process.env.GAMESHARD_ENDPOINT

    const fetchSchedule = async (id: any) => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${group_id}/fixtures/${id}`)
        return res.data.data
    }

    const { data: match, isLoading, isFetching } = useQuery(['match', id],
        () => fetchSchedule(id), {
        refetchOnWindowFocus: false,
        enabled: !!id && !!group_id,
        refetchInterval: 15000
    }
    )

    return { match, isFetching, isLoading }
}
