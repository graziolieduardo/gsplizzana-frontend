import { DashLayout } from '@/src/layouts/DashLayout'
import Link from 'next/link'
import React, { ReactElement } from 'react'

export default function index() {
  return (
    <>
      <h2 className='text-2xl font-bold'>La mia squadra</h2>
      <div className='flex justify-center items-center h-[500px]'>
        <div className='w-[220px] text-center'>
          <div className='font-bold'>Non hai ancora una squadra</div>
          <div className='text-xs mt-2'>Crea squadra e aggiungi gino a 10 giocatori per squadra</div>
          <div className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-[150px] py-2 mx-auto text-white text-center cursor-pointer mt-6">
            <Link  href="/dashboard/squadra/crea-squadra">+ Crea squadra</Link>
          </div>

        </div>
      </div>
    </>
  )
}


index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}
