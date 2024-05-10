import useLogin from '@/src/api/login/useLogin';
import { useAuthContext } from '@/src/hooks/useAuthContext';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Index() {
    // state
    const [handleInput, setHandleInput] = useState("password");

    // context
    const { user, setUser } = useAuthContext();

    //react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // tanstack query
    const { login } = useLogin();

    const onSubmit = async (d: any) => {
        const res = await login.mutateAsync(d);
        console.log(res);
        // TODO: set user on context
        // setUser({
        //     name: "prova",
        //     password: "aoooo"
        // });

    }

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className="h-[calc(100vh-80px)] max-w-container 2xl:max-w-container-xl mx-auto flex justify-center items-center">

            <form onSubmit={handleSubmit(onSubmit)} className="px-7 py-8 mt-6 mx-4 rounded-xl w-[456px] border">

                <h2 className="text-3xl font-bold ">Accedi o registrati</h2>
                <div className='text-gray-400 mt-2'>Non hai un account? <Link href="/registrati" ><span className='text-primary font-semibold'> Crea account </span></Link></div>

                {/* email */}
                <div className='mt-8'>
                    <label htmlFor="email" className="block font-semibold ">Indirizzo e-mail</label>
                    <input {...register('email', { required: '- Il campo Email è obbligatorio', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '- Scegli un email valido' } })} type="text" id="email" className={`${errors.email ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-3 w-full mt-2 placeholder:text-sm`} placeholder="inserisci e-mail" />
                    {errors.email && <div className="text-xs text-red-500">{errors.email.message as string}</div>}
                </div>

                {/* password */}
                <div className='mt-6'>
                    <label htmlFor="password" className="block font-semibold">Password</label>
                    <div className='relative'>
                        <input {...register('password', { required: '- Il campo Password è obbligatorio' })} type={handleInput} id="password" className={`${errors.password ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-3 w-full mt-2 placeholder:text-sm`} placeholder="inserisci password" />
                        <div onClick={() => { handleInput == "password" ? setHandleInput("text") : setHandleInput("password") }} className='absolute right-0 top-3 py-3 px-5'>
                            {
                                handleInput == "password" ? <FaRegEyeSlash className='text-gray-500 text-lg' /> : <FaRegEye className='text-gray-400 text-lg' />
                            }

                        </div>
                    </div>
                    {errors.password && <div className="text-xs text-red-500">{errors.password.message as string}</div>}
                </div>

                <div className='mt-16 flex justify-center items-center'>
                    <button className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full py-3 text-white text-center cursor-pointer">
                        Accedi
                    </button>
                </div>

            </form>
        </div>
    )
}
