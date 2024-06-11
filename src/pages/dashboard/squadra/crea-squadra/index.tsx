import { DashLayout } from '@/src/layouts/DashLayout'
import React, { ReactElement, useEffect } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import client from '@/src/api/client'
import { useAuthContext } from '@/src/hooks/useAuthContext'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter();
  const { user } = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (d: any) => {
    const res = await client.post('https://api.gsplizzana.it/api/teams', { name: d.name, tag: 'PRV', owner_id: user?.id })

    router.push('/dashboard/squadra');
    console.log(res);
  }

  return (
    <div>
      <h2 className='text-2xl font-bold'>La mia squadra</h2>

      <form onSubmit={handleSubmit(onSubmit)} >

        {/* nome  */}
        <div className='mt-8'>
          <label htmlFor="name" className="block text-sm font-semibold ">Nome della squadra</label>
          <input
            {...register('name', { required: '- Il campo Nome della squadra è obbligatorio' })}
            type="text"
            id="name"
            className={`${errors.name ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`}
            placeholder="nome della squadra" />
          {errors.name && <div className="text-xs text-red-500">{errors.name.message as string}</div>}
        </div>

        {/* tag  */}
        {/* <div className='mt-4'>
          <label htmlFor="tag" className="block text-sm font-semibold ">Tag della squadra</label>
          <input {...register('tag', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="tag" className={`${errors.tag ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`} placeholder="tag della squadra" />
          {errors.tag && <div className="text-xs text-red-500">{errors.tag.message as string}</div>}
        </div> */}

        {/* avatar_url  */}
        {/* <div className='mt-4'>
          <label htmlFor="avatar_url" className="block text-sm font-semibold ">Logo della squadra</label>
          <input{...register('avatar_url', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="avatar_url" className={`${errors.avatar_url ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`} placeholder="logo della squadra" />
          {errors.avatar_url && <div className="text-xs text-red-500">{errors.avatar_url.message as string}</div>}
        </div> */}

        {/* <div className="mt-4">
          <label className="font-semibold" htmlFor="">Logo</label>
          <div className="flex border border-primary bg-white w-full md:w-3/4 mt-2 p-3 rounded">
            <div className="image-upload h-10">

              <label htmlFor="file-input" className='h-full bg-gradient-to-r from-primary-dark to-primary rounded-full flex justify-center items-center'>
                <img className='w-[50%]' src="/static/arrow-up.svg" />
              </label>

              <input className='hidden' id="file-input" type="file" />
            </div>

            <div className='ml-3'>
              <div className="font-semibold">Carica logo squadra</div>
              <div className='text-xs text-secondary'>Formati supportati .jpg, .png, .svg</div>
            </div>
          </div>
        </div> */}

        {/* biography*/}
        {/* <div className='mt-4'>
          <label htmlFor="biography" className="block text-sm font-semibold ">Biography</label>
          <textarea {...register('biography', { required: '- Il campo biography è obbligatorio' })} name="biography" id="" className={`${errors.avatar_url ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`}></textarea>
          {errors.biography && <div className="text-xs text-red-500">{errors.biography.message as string}</div>}
        </div> */}

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


Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}