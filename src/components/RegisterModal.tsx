import React, { useCallback, useEffect, useState } from 'react'
import { useSignupContext } from '../hooks/useSignupContext';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineClose } from 'react-icons/ai';

const RegisterModal = ({ setIsRegisterOpen, modifyIndex }: any) => {
    // state
    const [underAgeError, setUnderAgeError] = useState('');
    const [isCaptainChecked, setIsCaptainChecked] = useState(false);
    const [isViceCaptainChecked, setViceIsCaptainChecked] = useState(false);

    // hooks
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    const handleCaptainChange = (e: any) => {
        setIsCaptainChecked(e.target.checked);
    }

    const handleViceCaptainChange = (e: any) => {
        setViceIsCaptainChecked(e.target.checked);
    }

    // context 
    const { players, setPlayers, updatePlayer } = useSignupContext();

    const onSubmit = useCallback((data: any) => {
        const date = '08/10/2007'; // mm/dd/YYYY
        const pickedDate = new Date(data.date_of_birth);
        const limitDate = new Date(date);

        if (pickedDate > limitDate) {
            setUnderAgeError('- solo giocatori sopra i 16 anni possono partecipare');
            return;
        } else {
            setUnderAgeError('');
        }

        if (modifyIndex !== null) {
            updatePlayer({ index: modifyIndex, player: data });
        } else {
            setPlayers(data);
        }
        setIsRegisterOpen(false);
    }, [modifyIndex])

    useEffect(() => {
        // console.log(players[modifyIndex]);

        if (modifyIndex !== null) {
            setValue('name', players[modifyIndex].name);
            setValue('lastname', players[modifyIndex].lastname);
            setValue('date_of_birth', players[modifyIndex].date_of_birth);
            setValue('phone', players[modifyIndex].phone);
            setValue('email', players[modifyIndex].email);
            setValue('instagram', players[modifyIndex].instagram);
            setValue('nickname', players[modifyIndex].nickname);
            setValue('isCaptain', players[modifyIndex].isCaptain);
            setValue('isViceCaptain', players[modifyIndex].isViceCaptain);
            setValue('participate', players[modifyIndex].participate);

            setIsCaptainChecked(players[modifyIndex].isCaptain);
            setViceIsCaptainChecked(players[modifyIndex].isViceCaptain);
        }
    }, [modifyIndex, players]);

    return (
        <div className='px-4 fixed inset-0 z-50 h-screen lg:fixed lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 py-10 rounded-md lg:w-4/5 mx-auto bg-white overflow-y-scroll shadow-2xl'>
            <div className="container mx-auto">

                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold '>Dati giocatore</h2>
                    <div onClick={() => setIsRegisterOpen(false)}>
                        <AiOutlineClose className='cursor-pointer hover:text-primary text-lg' />
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* nome */}
                    <div className='flex flex-col mt-5'>
                        <label className='font-semibold text-sm' htmlFor="name">Nome</label>
                        <input
                            {...register("name", { required: '- questo campo è obbligatorio' })}
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci nome'
                            type="text"
                            id='name'
                        />
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                        />
                    </div>

                    {/* cognome */}
                    <div className='flex flex-col mt-5'>
                        <label className='font-semibold text-sm' htmlFor="lastname">Cognome</label>
                        <input
                            {...register("lastname", { required: '- questo campo è obbligatorio' })}
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci cognome'
                            type="text"
                            id='lastname'
                        />
                        <ErrorMessage
                            errors={errors}
                            name="lastname"
                            render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                        />
                    </div>

                    <div className='lg:flex lg:justify-between gap-x-3 '>

                        {/* data di nascita */}
                        <div className='flex flex-col mt-4 lg:w-1/2'>
                            <label className='font-semibold text-sm' htmlFor="birth">Data di nascita</label>
                            <input
                                {...register("date_of_birth", { required: '- questo campo è obbligatorio', pattern: { value: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/, message: '- formatto data sbagliato' } })}
                                className='border rounded p-3 mt-1'
                                type="date"
                                id='birth'
                            />
                            <ErrorMessage
                                errors={errors}
                                name="date_of_birth"
                                render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                            />
                            {underAgeError.length > 0 && <p className='text-primary-dark'>{underAgeError}</p>}
                        </div>

                        {/* Numero di telefono */}
                        <div className='flex flex-col mt-4 lg:w-1/2'>
                            <label className='font-semibold text-sm' htmlFor="phone">Numero di telefono</label>
                            <input
                                {...register("phone", { required: '- questo campo è obbligatorio', pattern: { value: /^[0-9]{10}$/, message: '- numero di telefono non valido' } })}
                                className='border rounded p-3 mt-1'
                                placeholder='Inserisci numero di telefono'
                                type="tel"
                                id='phone'
                            />
                            <ErrorMessage
                                errors={errors}
                                name="phone"
                                render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                            />
                        </div>
                    </div>

                    {/* email */}
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold text-sm' htmlFor="email">E-mail</label>
                        <input
                            {...register("email")}
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci una e-mail (facoltativo)'
                            type="email"
                            id='email'
                        />
                    </div>

                    {/* tag instagram*/}
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold text-sm' htmlFor="instagram">Tag instagram</label>
                        <input
                            {...register("instagram")}
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci il tuo tag instragram (facoltativo)'
                            type="text"
                            id='instagram'
                        />
                    </div>

                    {/* capitano */}
                    <div className='mt-4 flex justify-between'>

                        <div className='font-semibold text-sm'>Capitano della squadra</div>

                        <label className={`relative inline-flex items-center ${(players.some((player) => { return player?.isCaptain }) && !players[modifyIndex]?.isCaptain) || isViceCaptainChecked ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            <input
                                {...register("isCaptain")}
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                onChange={handleCaptainChange}
                                disabled={(players.some((player) => { return player?.isCaptain }) && !players[modifyIndex]?.isCaptain) || isViceCaptainChecked}
                            />
                            <div className={`${(players.some((player) => { return player?.isCaptain }) && !players[modifyIndex]?.isCaptain) || isViceCaptainChecked ? 'dark:bg-gray-200' : 'dark:bg-gray-700'} w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary`}></div>
                        </label>
                    </div>

                    {/* vice capitano */}
                    <div className='mt-4 flex justify-between'>

                        <div className='font-semibold text-sm'>Vice-capitano della squadra</div>

                        <label className={`relative inline-flex items-center ${(players.some((player) => { return player?.isViceCaptain }) && !players[modifyIndex]?.isViceCaptain) || isCaptainChecked ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            <input
                                {...register("isViceCaptain")}
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                onChange={handleViceCaptainChange}
                                disabled={(players.some((player) => { return player?.isViceCaptain }) && !players[modifyIndex]?.isViceCaptain) || isCaptainChecked}
                            />
                            <div className={`${(players.some((player) => { return player?.isViceCaptain }) && !players[modifyIndex]?.isViceCaptain) || isCaptainChecked ? 'dark:bg-gray-200' : 'dark:bg-gray-700'} w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary`}></div>
                        </label>
                    </div>

                    {/* gia partecipato */}
                    <div className='flex justify-between mt-4'>

                        <div className='font-semibold w-3/4 text-sm'>Ha già partecipato al torneo dal 2015 al 2022</div>
                        <div>
                            <label className="relative inline-flex items-center cursor-pointer ">
                                <input
                                    {...register("participate")}
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>

                    {/* nickname */}
                    <div className='mt-4 flex flex-col'>
                        <label className='font-semibold text-sm' htmlFor="instagram">Ha già un soprannome assegnato dai nostri speaker?</label>
                        <input
                            {...register("nickname")}
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci il sopranome (solo se ne hai già uno)'
                            type="text"
                            id='instagram'
                        />
                    </div>

                    <div className='sm:flex sm:items-center sm:justify-around lg:justify-normal mt-4'>
                        {/* salva button */}
                        <button className="block rounded-full bg-gradient-to-r from-primary-dark to-primary w-full sm:w-72 lg:w-40 py-2.5 mt-6 sm:mt-0 text-white lg:mr-2" >Salva</button>

                        {/* Cancel button */}
                        <div className="flex justify-center align-center w-full sm:w-72 lg:w-40 rounded-full bg-gradient-to-r from-primary-dark to-primary p-0.5 mt-2 sm:mt-0 cursor-pointer" onClick={() => setIsRegisterOpen(false)}>
                            <div className="h-full w-full bg-white rounded-full text-center text-primary font-semibold py-2">
                                Annulla
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default RegisterModal
