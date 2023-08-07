import { useQuery } from "@tanstack/react-query";
import axios from  'axios'

export default function useSchedules() {

    const url = process.env.GAMESHARD_ENDPOINT
    
    const fetchSchedule = async () => {
        const res = await axios.get(`https://gsplizzana.internal.devlounge.dev/api/schedule`)         
        return res.data.data
    }

    const { data:schedule, isLoading, isFetching } = useQuery(['schedule'],
        () => fetchSchedule()
    )

    return { schedule , isFetching, isLoading }
}
