import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

export default function useElimination() {

    const fetchSchedule = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GAMESHARD_ENDPOINT}schedule?day=2023-08-13`);
        return res.data.data
    }

    const { data: schedule, isLoading, isFetching } = useQuery(['schedule'],
        () => fetchSchedule(),
    )

    return { schedule, isFetching, isLoading }
}