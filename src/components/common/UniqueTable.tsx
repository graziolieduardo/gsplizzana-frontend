import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UniqueTable({ data }: any) {

    const [page, setPage] = useState(1);

    const getMatches = async (page: any) => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT}groups/${1}/fixtures`, { params: { page: page } });
        return res.data;
    }

    const { data: manMatches, isLoading, isFetching } = useQuery(['manMatches', page],
        () => getMatches(page),
    )

    // useEffect(() => {
    //     console.log(page);
    // }, [page]);

    return (
        <div className='mb-4 bg-bg-secondary w-full mx-auto rounded-md border'>
            <div className='pt-7 px-5 '>

                <table className='w-full'>
                    <caption className='mb-4 text-xl font-semibold text-start'>Maschile Girone Unico</caption>
                    <thead>
                        <tr>
                            <th className='text-normal'>&nbsp;</th>
                            <th className='text-xs font-semibold'>Pt</th>
                            <th className='text-xs'>W</th>
                            <th className='text-xs'>Gf</th>
                            <th className='text-xs'>Gs</th>
                            {/* <th className='text-xs'>W</th> */}
                            {/* <th className='text-xs'>W</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data?.data?.map((team: any, index: any) => (

                                <tr key={team?.name} className='border-b last:border-0 capitalize [&>*:not(:first-child)]:text-center'>
                                    <td className='py-3 max-w-[70px] truncate text-sm'>
                                        <span className='font-semibold pr-2 '>{index + 1}</span>
                                        {team?.name}
                                    </td>
                                    <td className='py-3 font-semibold'>{team?.points}</td>
                                    <td className='py-3'>{team?.wins}</td>
                                    <td className='py-3'>{team?.goals_scored}</td>
                                    <td className='py-3'>{team?.goals_conceded}</td>
                                    {/* <td className='py-3'>{team?.win}</td> */}
                                    {/* <td className='py-3'>{team?.win}</td> */}
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
