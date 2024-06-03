import Giocatore from '@/src/components/common/Giocatore'
import { DashLayout } from '@/src/layouts/DashLayout'
import { FaPen } from "react-icons/fa";
import { ReactElement } from 'react'
import Link from 'next/link'


export default function Index() {



    return (
        <div>
            {/* titolo pagina  */}
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Le mie squadre</h2>

                <div className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-[150px] py-2 text-white text-center cursor-pointer ">
                    <Link href="/dashboard/squadra/crea-squadra">+ Crea squadra</Link>
                </div>
            </div>

            {/* se non ce squadra */}


            {
                false ?
                    // teams?.data?.length <= 0 ?
                    <div className='flex justify-center items-center h-[500px]'>
                        <div className='w-[220px] text-center'>
                            <div className='font-bold'>Non hai ancora una squadra</div>
                            <div className='text-xs mt-2'>Crea squadra e aggiungi gino a 10 giocatori per squadra</div>
                        </div>
                    </div>
                    :
                    <div className='mt-12'>

                        {/* da aggiungere lista di squadre  */}

                        <Link className='flex items-center mt-2' href={'/dashboard/squadra/1'}>
                            <p>Squadra 1</p>
                            <div className='ml-4 border p-1 rounded-full'>
                                <FaPen className=' text-sm'></FaPen>
                            </div>
                        </Link>

                        <Link className='flex items-center mt-2' href={'/dashboard/squadra/1'}>
                            <p>Squadra 1</p>
                            <div className='ml-4 border p-1 rounded-full'>
                                <FaPen className=' text-sm'></FaPen>
                            </div>
                        </Link>
                    </div>
            }
        </div>
    )
}

Index.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashLayout>{page}</DashLayout>
    )
}
