import Link from 'next/link'
import React from 'react'

export default function index() {
    return (
        <div className="bg-bg-primary">

            <div className="h-[calc(100vh-84px)] max-w-container 2xl:max-w-container-xl mx-auto px-6 py-6 flex justify-center items-center">
                <form className=" pt-12 pb-8 px-10 rounded mt-4 bg-white border">

                    <h2 className="text-2xl font-semibold text-center">Login</h2>

                    {/* email */}
                    <div className='mt-6 mb-4'>
                        <label htmlFor="email" className="block font-semibold">Email</label>
                        <input type="email" id="email" className="rounded  bg-gray-100 px-2 py-1" placeholder="Luigibuffon@gmail.com    " />
                    </div>

                    {/* password */}
                    <div>
                        <label htmlFor="password" className="block font-semibold">Password</label>
                        <input type="password" id="password" className="rounded bg-gray-100 px-2 py-1" placeholder="********" />
                    </div>

                    <div className='mt-8 flex justify-center items-center gap-x-4'>
                        <div className="rounded-full bg-gradient-to-r from-primary-dark to-primary hover:to-primary-dark w-full sm:w-fit sm:px-12 py-2 text-white text-center cursor-pointer">
                            Login
                        </div>
                    </div>

                    <div className="text-sm text-center mt-2"> <Link href="/iscriviti" className="text-blue-500 underline"> Registrati</Link></div>
                </form>
            </div>
        </div>
    )
}
