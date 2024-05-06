import { profile } from "console";
import Link from "next/link"
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const token = true 


    return (
        <>
            <header className={`bg-black text-white`}>
                <div className="max-w-container 2xl:max-w-container-xl flex justify-between flex-wrap items-center content-center mx-auto ">
                    <div className="py-6 pl-4">
                        <Link href="/" className="cursor-pointer">
                            <img className="w-24" src="/static/logo-arancione.svg" alt="" />
                        </Link>
                    </div>

                    <div className='md:hidden block border mx-6 p-2 rounded-sm text-xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {/* <div  className='sm:hidden block dark:text-white border rounded h-9 w-9 cursor pointer' /> */}
                        {/* <div onClick={() => setIsOpen(!isOpen)}> */}
                        <RxHamburgerMenu />
                        {/* </div> */}
                    </div>

                    {/* links */}
                    <nav className={`${isOpen ? 'block text-center bg-black z-10' : 'hidden'} w-full md:flex sm:items-center sm:w-auto `}>

                        <ul className='sm:flex sm:items-center font-semibold sm:space-x-7 capitaliza text-sm border sm:border-none md:last:mr-4'>

                            <li className="border-b p-4 md:p-0 sm:border-none">
                                <Link className="block w-full" href='/' onClick={() => setIsOpen(false)}>Home</Link>
                            </li>

                            <li className="border-b p-4 md:p-0 sm:border-none">
                                <Link className="block w-full" href='/programma/giovedì' onClick={() => setIsOpen(false)}>Programma</Link>
                            </li>

                            <li className="border-b p-4 md:p-0 sm:border-none">
                                <Link className="block w-full" href='/gironi/maschile' onClick={() => setIsOpen(false)}>Gironi</Link>
                            </li>

                            <li className="border-b p-4 md:p-0 sm:border-none">
                                <Link className="block w-full" href='/bracket/maschile' onClick={() => setIsOpen(false)}>Fase finale</Link>
                            </li>

                            <li className="border-b p-4 md:p-0 sm:border-none">
                                <Link className="block w-full" href='/marcatori' onClick={() => setIsOpen(false)}>Marcatori</Link>
                            </li>

                            {token ? (

                                // se c'e il token facciamo vedere il suo profilo
                                <li className=" border-b p-4 md:p-0 sm:border-none">
                                    <Link className="block w-full" href="/dashboard">Profile</Link>
                                </li>
                            ) : (

                                // se non c'e il token, facciamo vedere login e registrati 
                                <>
                                    <li className=" border-b p-4 md:p-0 sm:border-none">
                                        <Link className="block w-full" href='/iscriviti' onClick={() => setIsOpen(false)}>Iscriviti</Link>
                                    </li>

                                    <li className=" border-b p-4 md:p-0 sm:border-none">
                                        <Link className="block w-full" href='/login' onClick={() => setIsOpen(false)}>Login</Link>
                                    </li>
                                </>
                            )}

                            {/* <li>
                                <Link href='/gironi' className='' >Chi siamo</Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>

            </header >
        </>
    )
}
