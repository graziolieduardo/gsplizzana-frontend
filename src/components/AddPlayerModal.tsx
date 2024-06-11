import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import useAddTeamPlayer from '@/src/api/players/useAddTeamPlayer';


export default function AddPlayerModal({ setIsModalOpen, teamId }: any) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { addTeamPlayer } = useAddTeamPlayer()

    const onSubmit = async (d: any) => {
        try {
            await addTeamPlayer.mutateAsync({ d, teamId });
        } catch (err) {
            // TODO: manage errors                        
        }
    }

    return (
        <div className='px-4 fixed inset-0 z-50 lg:h-fit lg:fixed lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 py-10 rounded-md lg:w-3/5 mx-auto bg-white overflow-y-auto shadow-2xl'>
            <div className="max-w-container 2xl:max-w-container-xl mx-auto px-10">

                {/* chiudi modal */}
                <div onClick={() => setIsModalOpen(false)}>
                    <AiOutlineClose className='cursor-pointer hover:text-primary text-2xl absolute right-8 top-8' />
                </div>

                <h2 className="text-3xl font-bold">Dati giocatore</h2>

                {/* form */}
                <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>


                    {/* nome  */}
                    <div className='w-full flex flex-col mt-5'>
                        <label className='font-semibold block text-sm' htmlFor="name">Nome</label>
                        <input
                            {...register("name", { required: '- questo campo è obbligatorio' })}
                            className={`${errors.name ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} border rounded p-3 mt-1 focus:outline-1`}
                            placeholder='Inserisci nome'
                            type="text"
                            id='name'
                        />
                        {errors.name && <div className="text-xs text-red-500">{errors.name.message as string}</div>}
                    </div>

                    {/* surname */}
                    <div className='w-full flex flex-col mt-5'>
                        <label className='font-semibold text-sm' htmlFor="lastname">Cognome</label>
                        <input
                            {...register("surname", { required: '- questo campo è obbligatorio' })}
                            className={`${errors.surname ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} border rounded p-3 mt-1 focus:outline-1 focus:outline-primary`}
                            placeholder='Inserisci cognome'
                            type="text"
                            id='lastname'
                        />
                        <ErrorMessage
                            errors={errors}
                            name="surname"
                            render={({ message }: any) => <p className='text-xs text-red-500'>{message}</p>}
                        />
                    </div>


                    {/* email */}
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold text-sm' htmlFor="email">E-mail</label>
                        <input
                            {...register("email")}
                            className='border rounded p-3 mt-1 focus:outline-1 focus:outline-primary'
                            placeholder='Inserisci una e-mail (facoltativo)'
                            type="email"
                            id='email'
                        />
                    </div>

                    <div className="sm:flex gap-x-4">

                        {/* username */}
                        <div className='mt-4 w-full flex flex-col'>
                            <label className='font-semibold text-sm' htmlFor="surname">Username</label>
                            <input
                                {...register("username")}
                                className='border rounded p-3 mt-1 focus:outline-1 focus:outline-primary'
                                placeholder='Inserisci username'
                                type="text"
                                id='surname'
                            />
                        </div>

                        {/* data di nascita */}
                        <div className='flex w-full flex-col mt-4'>
                            <label className='font-semibold text-sm' htmlFor="birth">Data di nascita</label>
                            <input
                                {...register("birthdate", { required: '- questo campo è obbligatorio', pattern: { value: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, message: '- formatto data sbagliato' } })}
                                className={`${errors.surname ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} border rounded p-3 mt-1 focus:outline-1 focus:outline-primary`}
                                type="date"
                                id='birth'
                            />
                            <ErrorMessage
                                errors={errors}
                                name="birthdate"
                                render={({ message }: any) => <p className='text-xs text-red-500'>{message}</p>}
                            />
                        </div>
                    </div>

                    {/* capitano */}
                    <div className='mt-6 flex justify-between'>

                        <div className='font-semibold text-sm'>Capitano della squadra</div>

                        <label className={`relative inline-flex items-center`} htmlFor="capitan">
                            <input
                                {...register('capitan')}
                                type="checkbox"
                                className="sr-only peer"
                                id="capitan"
                            />
                            <div className={` w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary`}></div>
                        </label>
                    </div>

                    {/* salva annulla */}
                    <div className='mt-8'>
                        <button className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark px-6 py-2 text-white text-center cursor-pointer mr-4">salva</button>
                        <span onClick={() => { setIsModalOpen(false) }} className='rounded bg-white text-primary-dark font-semibold text-center py-2 border-gradient px-6 cursor-pointer'>annulla</span>
                    </div>

                </form>
            </div>
        </div>
    )
}
