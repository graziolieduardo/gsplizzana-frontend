import { DashLayout } from '@/src/layouts/DashLayout'
import { ReactElement, useState } from 'react'
import { useForm } from 'react-hook-form'
import AddPlayerModal from '@/src/components/AddPlayerModal'
import { GoPlus } from "react-icons/go";
import Giocatore from '@/src/components/common/Giocatore';
import Link from 'next/link';


export default function index() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (d: any) => {

    console.log(d);
  }

  return (
    <div>
      { isModalOpen && <AddPlayerModal setIsModalOpen={setIsModalOpen} />}
      <h2 className='text-2xl font-bold'>La mia squadra</h2>

      {/* form per edit squadra (solo i campi della squadra) */}
      <form onSubmit={handleSubmit(onSubmit)} >

        {/* nome  */}
        <div className='mt-8'>
          <label htmlFor="name" className="block font-semibold ">Nome della squadra</label>
          <input{...register('name', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="name" className={`${errors.name ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`} placeholder="nome della squadra" />
          {errors.name && <div className="text-xs text-red-500">{errors.name.message as string}</div>}
        </div>

        {/* tag  */}
        <div className='mt-4'>
          <label htmlFor="tag" className="block font-semibold ">Tag della squadra</label>
          <input{...register('tag', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="tag" className={`${errors.tag ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`} placeholder="tag della squadra" />
          {errors.tag && <div className="text-xs text-red-500">{errors.tag.message as string}</div>}
        </div>

        {/* avatar_url  */}
        {/* <div className='mt-4'>
          <label htmlFor="avatar_url" className="block font-semibold ">Logo della squadra</label>
          <input{...register('avatar_url', { required: '- Il campo Nome della squadra è obbligatorio' })} type="text" id="avatar_url" className={`${errors.avatar_url ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`} placeholder="logo della squadra" />
          {errors.avatar_url && <div className="text-xs text-red-500">{errors.avatar_url.message as string}</div>}
        </div> */}

        <div className="mt-4">
          <label className="font-semibold" htmlFor="file-input">Logo</label>
          <div className="flex items-center border border-primary hover:outline hover:outline-1 hover:outline-primary bg-white w-full md:w-3/4 mt-2 p-3 rounded">
            <div className="image-upload h-10">

              <label htmlFor="file-input" className='h-full bg-gradient-to-r  from-primary-dark to-primary hover:to-primary-dark rounded-full flex justify-center items-center'>
                <img className='w-[50%]' src="/static/arrow-up.svg" />
              </label>

              <input className='hidden' id="file-input" type="file" />
            </div>

            <div className='ml-3'>
              <div className="font-semibold">Carica logo squadra</div>
              <div className='text-xs text-secondary'>Formati supportati .jpg, .png, .svg</div>
            </div>
          </div>
        </div>

        {/* biography*/}
        <div className='mt-4'>
          <label htmlFor="biography" className="block font-semibold ">Biography</label>
          <textarea{...register('biography', { required: '- Il campo biography è obbligatorio' })} name="biography" id="" className={`${errors.avatar_url ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border px-4 py-2 w-full md:w-3/4 mt-2`}></textarea>
          {errors.biography && <div className="text-xs text-red-500">{errors.biography.message as string}</div>}
        </div>

      </form>

      {/* add giocatori*/}
      <div className='mt-10'>

        <div className='text-lg font-semibold'>Giocatori</div>
        <div className='text-sm'>Puoi aggiugere fino a 10 giocatori per squadra</div>

        <div onClick={() => { setIsModalOpen(true) }} className='w-full md:w-3/4 border border-primary hover:outline hover:outline-1 hover:outline-primary px-6 py-4 rounded flex items-center gap-x-4 mt-2'>

          <div className='rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-10 h-10 flex justify-center items-center text-white text-xl'>
            <GoPlus />
          </div>

          <div>
            <div className='font-semibold'>Aggiungi giocatore</div>
            <div className='text-xs'>Fino a 10 per squadre</div>
          </div>
        </div>

        <div className='mt-4'>
          <Giocatore />
        </div>

        {/* salva annulla */}
        <div className='mt-8'>
          <button className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark px-6 py-2 text-white text-center cursor-pointer mr-4">salva</button>
          <span className='rounded bg-white text-primary-dark font-semibold text-center py-2 border-gradient px-6'>

            <Link className='' href="/dashboard/squadra">annulla</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashLayout>{page}</DashLayout>
  )
}
