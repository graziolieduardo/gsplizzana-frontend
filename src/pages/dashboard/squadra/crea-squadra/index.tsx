import { DashLayout } from '@/src/layouts/DashLayout'
import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'

export default function index() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (d: any) => {

      console.log(d);
  }

  return (
    <div>
      <h2 className='text-lg font-bold'>crea nuova squadra</h2>

      <form onSubmit={handleSubmit(onSubmit)} >

      <div className='mt-8'>
                    <label htmlFor="name" className="block text-sm font-semibold ">Nome della squadra</label>
                    <input{...register('name', { required: '- Il campo Nome della squadra è obbligatorio'})} type="text" id="name" className={`${errors.name ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-3/4 mt-2`} placeholder="nome della squadra" />
                    {errors.email && <div className="text-xs text-red-500">{errors.email.message as string}</div>}
                </div>
      </form>

    </div>
  )
}


index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}