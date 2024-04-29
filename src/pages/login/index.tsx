import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function index() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (d: any) => {

        console.log(d);
    }
    return (
        <div className="bg-bg-primary">

            <div className="h-[calc(100vh-84px)] max-w-container 2xl:max-w-container-xl mx-auto px-6 py-6 flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className=" pt-12 pb-8 px-10 rounded mt-4 bg-white border">

                    <h2 className="text-2xl font-semibold text-center">Login</h2>

                    {/* email */}
                    <div className='mt-6 mb-4'>
                        <label htmlFor="email" className="block font-semibold">Email</label>
                        <input{...register('email', {required: '- Il campo Email è obbligatorio', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '- Scegli un email valido'}})} type="text" id="email" className={ `${errors.email? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="Luigibuffon@gmail.com    " />
                        {errors.email && <div className="text-xs text-red-500">{errors.email.message as string}</div> }
                    </div>

                    {/* password */}
                    <div>
                        <label htmlFor="password" className="block font-semibold">Password</label>
                        <input{...register('password', {required: '- Il campo Password è obbligatorio'})} type="password" id="password" className={ `${errors.password? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="********" />
                        {errors.password && <div className="text-xs text-red-500">{errors.password.message as string}</div> }
                    </div>

                    <div className='mt-8 flex justify-center items-center'>
                        <button className="rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full sm:w-fit sm:px-12 py-2 text-white text-center cursor-pointer">
                            Login
                        </button>
                    </div>
                  
                    <div className="text-sm mt-1 text-center"> <Link href="/iscriviti" className="text-blue-500 underline"> Registrati</Link></div>
                    
                </form>
            </div>
        </div>
    )
}
