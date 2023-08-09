import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className={`bg-black text-white`}>
                <div className="max-w-container 2xl:max-w-container-xl flex justify-between flex-wrap items-center content-center mx-auto pt-4">
                    <div className="pl-4 pb-4">
                        <Link href="/" className="cursor-pointer">
                            <img className="w-24" src="/static/logo-arancione.svg" alt="" />
                        </Link>
                    </div>

                    <div className='sm:hidden block border mx-6 p-2 rounded-sm text-xl cursor-pointer mb-4' onClick={() => setIsOpen(!isOpen)}>
                        {/* <div  className='sm:hidden block dark:text-white border rounded h-9 w-9 cursor pointer' /> */}
                        {/* <div onClick={() => setIsOpen(!isOpen)}> */}
                        <RxHamburgerMenu />
                        {/* </div> */}
                    </div>

                    {/* links */}
                    <nav className={`${isOpen ? 'block text-center bg-black z-10' : 'hidden'} w-full sm:flex sm:items-center sm:w-auto sm:mb-4`}>
                        <ul className='sm:flex sm:items-center font-semibold sm:space-x-3 capitaliza text-sm border sm:border-none'>
                            <li className="border-b sm:border-none">
                                <Link className="p-4 block w-full" href='/' onClick={() => setIsOpen(false)}>Home</Link>
                            </li>

                            <li className="border-b sm:border-none">
                                <Link className="p-4 block w-full" href='/programma/giovedì' onClick={() => setIsOpen(false)}>Programma</Link>
                            </li>

                            <li className="border-b sm:border-none">
                                <Link className="p-4 block w-full" href='/gironi/maschile' onClick={() => setIsOpen(false)}>Gironi</Link>
                            </li>

                            <li>
                                <Link className="p-4 block w-full" href='/bracket'>Fase finale</Link>
                            </li>

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
