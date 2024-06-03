import useTeamPlayers from '@/src/api/players/useTeamPlayers';
import useTeams from '@/src/api/teams/useTeams';
import Giocatore from '@/src/components/common/Giocatore';
import { DashLayout } from '@/src/layouts/DashLayout'
import { ReactElement } from 'react'

export default function Index() {
    const { teams } = useTeams();
    const { teamPlayers } = useTeamPlayers(teams?.data[0]?.id);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Le mie squadre</h2>
            <div>
                {/* nome da squadra  */}
                <div className='mt-4'>
                    <div className='text-title-gray text-sm'>Nome della squadra </div>
                    <div className='text-sm'>{teams?.data[0]?.name?.toUpperCase()}</div>
                </div>

                {/* tag squadra */}
                <div className='mt-4'>
                    <div className='text-title-gray text-sm'>tag squadra </div>
                    <div className='text-sm'>{teams?.data[0]?.tag?.toUpperCase()}</div>
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


                {/* giocatori */}
                <div className='mt-4'>
                    <h3 className='font-bold'>Giocatori (8/10)</h3>

                    {/* prova con variabile dal esterno. da settare dentro nel componente quando farai map  */}
                    <Giocatore  />
                    <Giocatore />
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
