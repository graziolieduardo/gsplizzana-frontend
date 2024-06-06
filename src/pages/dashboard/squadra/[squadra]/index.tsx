import useTeamPlayers from '@/src/api/players/useTeamPlayers';
import useTeams from '@/src/api/teams/useTeams';
import AddPlayerModal from '@/src/components/AddPlayerModal';
import Giocatore from '@/src/components/common/Giocatore';
import { GoPlus } from "react-icons/go";
import { DashLayout } from '@/src/layouts/DashLayout';
import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
    //react query
    const { teams } = useTeams();
    const { teamPlayers } = useTeamPlayers(teams?.data[0]?.id);

    const [isModalOpen, setIsModalOpen] = useState(false)

    // page url to query the team
    const router = useRouter();
    const { squadra:teamId }:any = router.query;

    return (
        <div>
            {/* modal to add player */}
            {isModalOpen && <AddPlayerModal teamId={teamId} setIsModalOpen={setIsModalOpen} />}

            <h2 className='text-2xl font-bold'>Le mie squadre </h2>
            <div>
                {/* nome da squadra  */}
                <div className='mt-4'>
                    <div className='text-title-gray text-sm'>Nome della squadra </div>
                    <div className='text-sm'>{teams?.data[teamId - 1]?.name?.toUpperCase()}</div>
                </div>

                {/* tag squadra */}
                <div className='mt-4'>
                    <div className='text-title-gray text-sm'>tag squadra </div>
                    <div className='text-sm'>{teams?.data[teamId - 1]?.tag?.toUpperCase()}</div>
                </div>

                {/* avatar_url squadra */}
                {/* <div className='mt-4'>
                            <div className='text-title-gray text-sm'>Logo squadra </div>
                            <div className='text-sm h-[50px] w-[90px] border'>logo</div>
                        </div> */}

                {/* biography squadra */}
                {/* <div className='mt-4'>
                            <div className='text-title-gray text-sm'>Biography </div>
                            <div className='text-sm  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam eos culpa corporis aut perspiciatis veniam, porro officia voluptatem nam consequatur incidunt error. Mollitia totam qui atque, sequi laborum amet!</div>
                        </div> */}


                {/* add giocatori */}
                <div
                    onClick={() => { setIsModalOpen(true) }}
                    className='w-full md:w-3/4 border border-primary hover:outline hover:outline-1 hover:outline-primary px-6 py-4 rounded flex items-center gap-x-4 mt-6'
                >
                    <div className='rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-10 h-10 flex justify-center items-center text-white text-xl'>
                        <GoPlus />
                    </div>
                    <div>
                        <div className='font-semibold'>Aggiungi giocatore</div>
                        <div className='text-xs'>Fino a 10 per squadre</div>
                    </div>
                </div>

                {/* giocatori */}
                <div className='mt-4'>
                    <h3 className='font-bold'>Giocatori ( {teamPlayers?.data.length}/10)</h3>

                    <Giocatore player={teamPlayers?.data[0]} />
                </div>
            </div>
        </div>
    )
}

Index.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashLayout>{page}</DashLayout>
    )
}
