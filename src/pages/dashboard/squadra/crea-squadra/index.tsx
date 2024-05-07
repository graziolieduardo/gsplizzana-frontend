import { DashLayout } from '@/src/layouts/DashLayout'
import Link from 'next/link'
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

        {/* nome  */}
        <div className='mt-8'>
          <label htmlFor="name" className="block text-sm font-semibold ">Nome della squadra</label>
          <input{...register('name', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="name" className={`${errors.name ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-3/4 mt-2`} placeholder="nome della squadra" />
          {errors.name && <div className="text-xs text-red-500">{errors.name.message as string}</div>}
        </div>

        {/* tag  */}
        <div className='mt-4'>
          <label htmlFor="tag" className="block text-sm font-semibold ">Tag della squadra</label>
          <input{...register('tag', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="tag" className={`${errors.tag ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-3/4 mt-2`} placeholder="tag della squadra" />
          {errors.tag && <div className="text-xs text-red-500">{errors.tag.message as string}</div>}
        </div>

        {/* avatar_url  */}
        <div className='mt-4'>
          <label htmlFor="avatar_url" className="block text-sm font-semibold ">Logo della squadra</label>
          <input{...register('avatar_url', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="avatar_url" className={`${errors.avatar_url ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-3/4 mt-2`} placeholder="logo della squadra" />
          {errors.avatar_url && <div className="text-xs text-red-500">{errors.avatar_url.message as string}</div>}
        </div>

        {/* biography*/}
        <div className='mt-4'>
          <label htmlFor="biography" className="block text-sm font-semibold ">Biography</label>
          <textarea{...register('biography', { required: '- Il campo biography è obbligatorio' })} name="biography" id="" className={`${errors.avatar_url ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-3/4 mt-2`}></textarea>
          {errors.biography && <div className="text-xs text-red-500">{errors.biography.message as string}</div>}
        </div>

        {/* salva annulla */}
        <div className='mt-8'>
          <button className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark px-6 py-2 text-white text-center cursor-pointer mr-4">salva</button>
          <span className='rounded bg-white text-primary-dark font-semibold text-center py-2 border-gradient px-6'>

            <Link className='' href="/dashboard/squadra">annulla</Link>
          </span>



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