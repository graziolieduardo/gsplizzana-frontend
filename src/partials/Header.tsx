import Link from "next/link"
import { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    //to avoid bug when menu is open and the width has changed 
    useEffect(() => {
        if(window.innerWidth > 639) {
            setIsOpen(false)         
        }
    }, [])
    

    return (
        <>
            <header className={`bg-black h-[72px] text-white ${isOpen? 'mb-16 ' : null}`}>
                <div className="max-w-container 2xl:max-w-container-xl flex justify-between flex-wrap items-center content-center mx-auto py-4">
                    <div className="pl-4">
                        <Link href="/" className="cursor-pointer">
                            <img className="w-24" src="/static/logo-arancione.svg" alt="" />
                        </Link>
                    </div>

                    <div onClick={() => setIsOpen(!isOpen)} className='sm:hidden block border mx-6 p-2 rounded-sm text-xl'>
                        {/* <div  className='sm:hidden block dark:text-white border rounded h-9 w-9 cursor pointer' /> */}
                        <RxHamburgerMenu/>
                    </div>

                    {/* links */}
                    <nav className={`${isOpen ? 'block text-center mt-3 pb-2 bg-black  z-10'  : 'hidden'} w-full sm:flex sm:items-center sm:w-auto`}>
                        <ul className='sm:flex font-semibold space-x-3 sm:pr-4'>

                            <li>
                                <Link href='/gironi' className='' >Gironi</Link>
                            </li>

                            <li>
                                <Link href='/gironi' className=''>Programma 2023</Link>
                            </li>

                            <li>
                                <Link href='/gironi' className='' >Bracket</Link>
                            </li>

                            <li>
                                <Link href='/gironi' className='' >Chi siamo</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header >
        </>
    )
}
