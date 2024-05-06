import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {

    const [handleInput, setHandleInput] = useState("password")

    // ract hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (d: any) => {

        console.log(d);
    }

    return (

        <div className="h-[calc(100vh-84px)] max-w-container 2xl:max-w-container-xl mx-auto px-6 py-6 flex justify-center items-center">

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className=" px-7 py-7 mt-6 mx-4 rounded-xl w-[456px] border">

                <h2 className="text-3xl font-bold">Crea account</h2>
                <div className='text-gray-400'>hai gia un account? <Link href="/login" ><span className='text-primary font-semibold'> Accedi </span></Link></div>

                {/* name */}
                <div className="flex-1 mt-6">
                    <label htmlFor="name" className="block font-semibold ">Nome</label>
                    <input{...register("name", {
                        required: '- Il campo Nome è obbligatorio'
                    })} type="text" id="name" className={`${errors.name ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-2 w-full`} placeholder="Luigi" />
                    {errors.name && <div className="text-xs text-red-500">{errors.name.message as string}</div>}
                </div>

                {/* surname */}
                <div className="flex-1">
                    <label htmlFor="surname" className="block font-semibold mt-1">Cognome</label>
                    <input{...register("surname", {
                        required: '- Il campo Cognome è obbligatorio'
                    })} type="text" id="surname" className={`${errors.surname ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-2 w-full`} placeholder="Buffon" />
                    {errors.surname && <div className="text-xs text-red-500">{errors.surname.message as string}</div>}
                </div>



                {/* email */}
                <div>
                    <label htmlFor="email" className="block font-semibold mt-1">Email</label>
                    <input{...register("email", { required: '- Il campo Email è obbligatorio', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '- Scegli un email valido' } })} type="text" id="email" className={`${errors.email ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-2 w-full`} placeholder="luigibuffon@gmail.com" />
                    {errors.email && <div className="text-xs text-red-500">{errors.email.message as string}</div>}
                </div>

                {/* Username */}
                <div>
                    <label htmlFor="username" className="block font-semibold mt-1">Username</label>
                    <input{...register("username", { required: '- Il campo Username è obbligatorio' })} type="text" id="username" className={`${errors.username ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-2 w-full`} placeholder="luiginho" />
                    {errors.username && <div className="text-xs text-red-500">{errors.username.message as string}</div>}
                </div>

                {/* Birthdate */}
                <div>
                    <label htmlFor="birthdate" className="block font-semibold mt-1">Birthdate</label>
                    <input{...register("birthdate", { required: '- Scegli una data' })} type="date" id="birthdate" className={`${errors.birthdate ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-2 w-full`} placeholder="birthdate" />
                    {errors.birthdate && <div className="text-xs text-red-500">{errors.birthdate.message as string}</div>}
                </div>


                {/* password */}
                <div className="flex-1">
                    <label htmlFor="password" className="block font-semibold mt-1">Password</label>
                    <input{...register("password", { required: '- Scegli una password' })} type="password" id="password" className={`${(errors.password || errors.password_confirmation?.message) ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-2 w-full`} placeholder="password" />
                    {errors.password && <div className="text-xs text-red-500">{errors.password.message as string}</div>}
                </div>

                {/* confirm password */}
                <div className="flex-1">
                    <label htmlFor="password_confirmation" className="block font-semibold mt-1">Conferma Password</label>
                    <div className="relative">
                        <input{...register("password_confirmation", { required: '- Conferma la password', validate: value => value === watch('password') || '- Le Password nono sono uguali' })} type={handleInput} id="password_confirmation" className={`${errors.password_confirmation ? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded border p-2 w-full`} placeholder="confirm-password" />
                        <div onClick={() => { handleInput == "password" ? setHandleInput("text") : setHandleInput("password") }} className='absolute right-0 top-0 py-3 px-5'>
                            {
                                handleInput == "password" ? <FaRegEyeSlash className='text-gray-500 text-lg' /> : <FaRegEye className='text-gray-400 text-lg' />
                            }

                        </div>
                    </div>
                    {errors.password_confirmation && <div className="text-xs text-red-500">{errors.password_confirmation.message as string}</div>}

                </div>


                <div className='mt-8 flex justify-center items-center'>
                    <button className="rounded bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full py-3 text-white text-center cursor-pointer">
                        registrati
                    </button>
                </div>

            </form>
        </div>

    )
}