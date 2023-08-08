import Link from "next/link"
import { useState, useEffect, useRef } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className={`bg-black text-white `}>
                <div className="max-w-container 2xl:max-w-container-xl flex justify-between flex-wrap items-center content-center mx-auto py-4">
                    <div className="pl-4">
                        <Link href="/" className="cursor-pointer">
                            <img className="w-24" src="/static/logo-arancione.svg" alt="" />
                        </Link>
                    </div>
                    
                    <div className='sm:hidden block border mx-6 p-2 rounded-sm text-xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {/* <div  className='sm:hidden block dark:text-white border rounded h-9 w-9 cursor pointer' /> */}
                        {/* <div onClick={() => setIsOpen(!isOpen)}> */}
                            <RxHamburgerMenu />
                        {/* </div> */}
                    </div>

                    {/* links */}

                    <nav className={`${isOpen ? 'block text-center bg-black z-10' : 'hidden'} w-full sm:flex sm:items-center sm:w-auto`}>
                        <ul className='sm:flex sm:items-center font-semibold sm:space-x-3 capitaliza text-sm'>

                            <li>
                                <Link href='/'>Home</Link>
                            </li>

                            <li>
                                <Link href='/gironi/maschile'>Gironi</Link>
                            </li>

                            <li>
                                <Link href='/programma/giovedì'>Programma 2023</Link>
                            </li>

                            <li>
                                <Link href='/bracket'>Bracket</Link>
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
