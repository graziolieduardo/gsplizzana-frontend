import Link from "next/link";

export default function Login() {


    return (
        <div className="bg-bg-primary">

            <div className="h-[calc(100vh-84px)] max-w-container 2xl:max-w-container-xl mx-auto px-6 py-6 flex justify-center items-center">
                <form className=" py-12 px-12 md:px-10 rounded mt-4  bg-white border">

                    <h2 className="text-2xl font-semibold text-center">Registrazione</h2>

                    {/* name and surname */}
                    <div className="mt-6 md:flex gap-x-4">

                        {/* name */}
                        <div className="flex-1">
                            <label htmlFor="name" className="block font-semibold ">Nome</label>
                            <input type="text" id="name" className="rounded  bg-gray-100 px-2 py-1 w-full" placeholder="Luigi" />
                            {/* <input{...register("name", {required:"pipilo"})} type="text" id="name" className="rounded  bg-gray-100 px-2 py-1 w-full" placeholder="Luigi" /> */}
                        </div>

                        {/* surname */}
                        <div className="flex-1">
                            <label htmlFor="surname" className="block font-semibold mt-4 md:mt-0">Cognome</label>
                            <input type="text" id="surname" className="rounded bg-gray-100 px-2 py-1 w-full" placeholder="Buffon" />
                        </div>
                    </div>

                    {/* Email, Birthdate and Username */}
                    <div className="mt-4 md:flex  gap-x-4">
                        {/* email */}
                        <div>
                            <label htmlFor="email" className="block font-semibold mt-4 md:mt-0">Email</label>
                            <input type="email" id="email" className="rounded  bg-gray-100 px-2 py-1" placeholder="luigibuffon@gmail.com" />
                        </div>

                        {/* Username */}
                        <div>
                            <label htmlFor="username" className="block font-semibold mt-4 md:mt-0">Username</label>
                            <input type="text" id="username" className="rounded bg-gray-100 px-2 py-1" placeholder="luiginho" />
                        </div>

                        {/* Birthdate */}
                        <div>
                            <label htmlFor="birthdate" className="block font-semibold mt-4 md:mt-0">Birthdate</label>
                            <input type="date" id="birthdate" className="rounded bg-gray-100 px-2 py-1" placeholder="birthdate" />
                        </div>
                    </div>

                    {/* password and confinrm passoword */}
                    <div className="mt-4 md:flex gap-x-4">

                        {/* password */}
                        <div className="flex-1">
                            <label htmlFor="password" className="block font-semibold mt-4 md:mt-0">Password</label>
                            <input type="password" id="password" className="rounded  bg-gray-100 px-2 py-1 w-full " placeholder="password" />
                        </div>

                        {/* confirm password */}
                        <div className="flex-1">
                            <label htmlFor="confirm-password" className="block font-semibold mt-4 md:mt-0">Conferma Password</label>
                            <input type="password" id="confirm-password" className="rounded bg-gray-100 px-2 py-1 w-full " placeholder="confirm-password" />
                        </div>
                    </div>

                    <div className='mt-8 flex justify-center items-center gap-x-4'>
                        <div className="rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full sm:w-fit sm:px-12 py-2 text-white text-center cursor-pointer">
                            registrati
                        </div>
                    </div>

                    <div className="text-sm text-center mt-2">Gia registrato? <Link href="/login" className="text-blue-500 underline">Login</Link></div>


                </form>
            </div>
        </div>
    )
}