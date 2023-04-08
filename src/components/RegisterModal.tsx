import React from 'react'

const RegisterModal = () => {
    return (
        <div className='px-4 h-screen bg-white '>
            <div className="container mx-auto">

                <h2 className='text-2xl font-bold pt-10'>Dati giocatore</h2>

                <form action="">

                    {/* nome cognome */}
                    <div className='flex flex-col mt-5'>
                        <label className='font-semibold text-sm' htmlFor="full-name">Nome e cognome</label>
                        <input
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci nome e cognome'
                            type="text"
                            id='full-name'
                        />
                    </div>

                    {/* data di nascita */}
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold text-sm' htmlFor="birth">Data di nascita</label>
                        <input
                            className='border rounded p-3 mt-1'
                            type="date"
                            id='birth'
                        />
                    </div>

                    {/* Numero di telefono */}
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold text-sm' htmlFor="phone">Numero di telefono</label>
                        <input
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci numero di telefono'
                            type="tel"
                            id='phone'
                        />
                    </div>

                    {/* email */}
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold text-sm' htmlFor="email">E-mail</label>
                        <input
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci una e-mail'
                            type="email"
                            id='email'
                        />
                    </div>

                    {/* tag instagram*/}
                    <div className='flex flex-col mt-4'>
                        <label className='font-semibold text-sm' htmlFor="instagram">Tag instagram</label>
                        <input
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci il tuo nome di instragram'
                            type="text"
                            id='instagram'
                        />
                    </div>

                    {/* capitano */}
                    <div className='mt-4 flex justify-between'>

                        <div className='font-semibold'>Capitano della squadra</div>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    {/* gia partecipato */}
                    <div className='flex justify-between mt-4'>

                        <div className='font-semibold w-3/4'>Ho gia partecipato al torneo di Lizzana nelle edizioni precedenti</div>
                        <div>
                            <label className="relative inline-flex items-center cursor-pointer ">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col'>
                        <input
                            className='border rounded p-3 mt-1'
                            placeholder='Inserisci il sopranome (facoltativo)'
                            type="text"
                            id='instagram'
                        />
                    </div>

                    <button className="block rounded-full bg-gradient-to-r from-primary-dark to-primary w-full sm:w-72 py-3 mt-6 text-white" >Salva</button>

                    {/* button */}
                    <div className="flex justify-center align-center w-full rounded-full bg-gradient-to-r from-primary-dark to-primary p-0.5 mt-2">
                        <div className="h-full w-full bg-white rounded-full text-center text-primary font-semibold py-2">
                            Annula
                        </div>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default RegisterModal
