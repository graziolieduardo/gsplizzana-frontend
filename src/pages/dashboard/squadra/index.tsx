import Giocatore from '@/src/components/common/Giocatore'
import { DashLayout } from '@/src/layouts/DashLayout'
import { FaPen } from "react-icons/fa";
import { ReactElement } from 'react'
import Link from 'next/link'

export default function index() {

  //simulando a chamada xD
  const squadra = false

  return (
    <div>

      {/* titolo pagina  */}
      <div className='relative'>
        <h2 className='text-2xl font-bold'>La mia squadra</h2>

        {/* edit button solo se la squadra ce */}
        {squadra && <Link href="/dashboard/squadra/edit-squadra" className='absolute right-0 top-0 border rounded-full p-3'>

          <FaPen />
        </Link>}
      </div>

      {/* se non ce squadra */}
      {!squadra && <div className='flex justify-center items-center h-[500px]'>
        <div className='w-[220px] text-center'>
          <div className='font-bold'>Non hai ancora una squadra</div>
          <div className='text-xs mt-2'>Crea squadra e aggiungi gino a 10 giocatori per squadra</div>
          <div className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-[150px] py-2 mx-auto text-white text-center cursor-pointer mt-6">
            <Link href="/dashboard/squadra/crea-squadra">+ Crea squadra</Link>
          </div>
        </div>
      </div>}

      {squadra && <div>

        {/* nome da squadra  */}
        <div className='mt-4'>
          <div className='text-gray-400 text-sm font-semibold'>Nome della squadra </div>
          <div className='text-sm font-semibold'>Nome dinamico della squadra</div>
        </div>

        {/* tag squadra */}
        <div className='mt-4'>
          <div className='text-gray-400 text-sm font-semibold'>tag squadra </div>
          <div className='text-sm font-semibold'>tag dinamico squadra</div>
        </div>

        {/* avatar_url squadra */}
        <div className='mt-4'>
          <div className='text-gray-400 text-sm font-semibold'>Logo squadra </div>
          <div className='text-sm font-semibold h-[50px] w-[90px] border'>logo</div>
        </div>

        {/* biography squadra */}
        <div className='mt-4'>
          <div className='text-gray-400 text-sm font-semibold'>Biography </div>
          <div className='text-sm  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam eos culpa corporis aut perspiciatis veniam, porro officia voluptatem nam consequatur incidunt error. Mollitia totam qui atque, sequi laborum amet!</div>
        </div>


        {/* giocatori */}
        <div className='mt-4'>
          <h3 className='font-bold'>Giocatori (8/10)</h3>

          {/* prova con variabile dal esterno. da settare dentro nel componente quando farai map  */}
          <Giocatore isCapitan={true} />
          <Giocatore />
        </div>

      </div>}
    </div>
  )
}


index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}
