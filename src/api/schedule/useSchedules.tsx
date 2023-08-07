import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

export default function useSchedules(params: any) {
    let day: string;

    switch (params.day) {
        case 'giovedì': day = '2023-08-10';
            break;
        case 'venerdì': day = '2023-08-11';
            break;
        case 'sabato': day = '2023-08-12';
            break;
        case 'domenica': day = '2023-08-13';
            break;
        default:
            day = '2023-08-10';
    }

    const fetchSchedule = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GAMESHARD_ENDPOINT}schedule`, {
            params: { day }
        });
        return res.data.data
    }

    const { data: schedule, isLoading, isFetching } = useQuery(['schedule', params],
        () => fetchSchedule(),
    )

    return { schedule, isFetching, isLoading }
}
