import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function Giocatore({isCapitan}:any) {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div onClick={() => { setIsOpen(!isOpen) }} className={`${isCapitan? 'border-primary' : 'border-gray-200'} border rounded p-3 mt-2`}>

            {/* nome cognome giocatore */}
            <div className={`${isOpen ? 'border-b pb-3 ' : ''} px-2 text-sm font-semibold flex items-center`}>
                <div className=' mr-2'>
                    {
                        isOpen ? <FaChevronUp /> : <FaChevronDown />
                    }
                </div>
                <div> nome cognome  {isCapitan && "(C)"}</div>
            </div>


            {isOpen && <div className='text-xs text-gray-500'>
                {/* birthdate */}
                <div className='mt-2'>GG/MM/AAAA</div>

                {/* username */}
                <div className='mt-2'>username </div>

                {/* email */}
                <div className='mt-2'>email@pocoto.com.com.com</div>

                {/* avatar url */}
                <div className='mt-2'>avatar_url</div>
            </div>}

        </div>
    )
}
