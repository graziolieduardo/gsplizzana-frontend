import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

export default function useSchedules() {
    const fetchSchedule = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}fixtures`);
        return res.data.data
    }

    const { data: schedule, isLoading, isFetching } = useQuery(['schedule'],
        () => fetchSchedule(),
    )

    return { schedule, isFetching, isLoading }
}
