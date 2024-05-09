import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaTrash  } from "react-icons/fa";
import AddPlayerModal from '../AddPlayerModal';


export default function Giocatore({ isCapitan, isEditPage }: any) {

    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)


    return (
        <div onClick={() => { setIsOpen(!isOpen) }} className={`${isCapitan ? 'border-primary' : 'border-gray-200'} border rounded p-3 mt-2`}>
            { isModalOpen && <AddPlayerModal setIsModalOpen={setIsModalOpen} />}

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

                {/* edit and delete button */}
                {isEditPage && <div className='mt-2 gap-x-4 flex items-center '>
                    <div onClick={ () => { setIsModalOpen(!isModalOpen) } } className='rounded w-full bg-white text-primary-dark font-semibold text-center py-2 border-gradient px-6'> Modifica</div>
                    <div className='rounded-full border p-2 cursor-pointer'> <FaTrash className='text-lg'/> </div>
                </div >}

            </div>}

        </div>
    )
}
