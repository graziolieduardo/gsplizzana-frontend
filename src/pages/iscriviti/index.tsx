import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (d: any) => {     
      
        console.log(d);
    }

    return (
        <div className="bg-bg-primary">

            <div className="h-[calc(100vh-84px)] max-w-container 2xl:max-w-container-xl mx-auto px-6 py-6 flex justify-center items-center">

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className=" py-12 px-12 md:px-10 rounded mt-4  bg-white border">

                    <h2 className="text-2xl font-semibold text-center">Registrazione</h2>

                    <div className="mt-6 md:flex gap-x-4">

                        {/* name */}
                        <div className="flex-1">
                            <label htmlFor="name" className="block font-semibold ">Nome</label>
                            <input{...register("name", {
                                required: '- this field is required' 
                            })} type="text" id="name" className={ `${errors.name? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="Luigi" />
                            {errors.name && <div className="text-xs text-red-500">{errors.name.message as string}</div> }
                        </div>

                        {/* surname */}
                        <div className="flex-1">
                            <label htmlFor="surname" className="block font-semibold mt-4 md:mt-0">Cognome</label>
                            <input{...register("surname", {
                                required: '- the field surname is required' 
                            })} type="text" id="surname" className={ `${errors.surname? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="Buffon" />
                            {errors.surname && <div className="text-xs text-red-500">{errors.surname.message as string}</div> }
                        </div>
                    </div>

                    <div className="mt-4 md:flex  gap-x-4">
                        {/* email */}
                        <div>
                            <label htmlFor="email" className="block font-semibold mt-4 md:mt-0">Email</label>
                            <input{...register("email", {required: '- the field email is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: '- Scegli un email valido'} })} type="text" id="email" className={ `${errors.email? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="luigibuffon@gmail.com" />
                            {errors.email && <div className="text-xs text-red-500">{errors.email.message as string}</div> }
                        </div>

                        {/* Username */}
                        <div>
                            <label htmlFor="username" className="block font-semibold mt-4 md:mt-0">Username</label>
                            <input{...register("username", {required: '- the field username is required'})} type="text" id="username" className={ `${errors.username? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="luiginho" />
                            {errors.username && <div className="text-xs text-red-500">{errors.username.message as string}</div> }
                        </div>

                        {/* Birthdate */}
                        <div>
                            <label htmlFor="birthdate" className="block font-semibold mt-4 md:mt-0">Birthdate</label>
                            <input{...register("birthdate", {required: '- Scegli una data'})} type="date" id="birthdate" className={ `${errors.birthdate? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="birthdate" />
                            {errors.birthdate && <div className="text-xs text-red-500">{errors.birthdate.message as string}</div> }
                        </div>
                    </div>

                    <div className="mt-4 md:flex gap-x-4">

                        {/* password */}
                        <div className="flex-1">
                            <label htmlFor="password" className="block font-semibold mt-4 md:mt-0">Password</label>
                            <input{...register("password", {required: '- scegli una password'})} type="password" id="password" className={ `${(errors.password || errors.password_confirmation?.message)? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="password" />
                            {errors.password && <div className="text-xs text-red-500">{errors.password.message as string}</div> }
                        </div>

                        {/* confirm password */}
                        <div className="flex-1">
                            <label htmlFor="password_confirmation" className="block font-semibold mt-4 md:mt-0">Conferma Password</label>
                            <input{...register("password_confirmation", {required: '- rimeti la password',  validate: value => value === watch('password') || '- Le password sono diverse'})} type="password" id="password_confirmation" className={ `${errors.password_confirmation? 'focus:outline-red-500 border-2 border-red-500' : 'focus:outline-primary'} rounded bg-gray-100 px-2 py-1 w-full`} placeholder="confirm-password" />
                            {errors.password_confirmation && <div className="text-xs text-red-500">{errors.password_confirmation.message as string}</div> }

                        </div>
                    </div>

                    <div className='mt-8 flex justify-center items-center gap-x-4'>
                        <button className="rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full sm:w-fit sm:px-12 py-2 text-white text-center cursor-pointer">
                            registrati
                        </button>
                    </div>

                    <div className="text-sm text-center mt-2">Gia registrato? <Link href="/login" className="text-blue-500 underline">Login</Link></div>
                </form>
            </div>
        </div>
    )
}