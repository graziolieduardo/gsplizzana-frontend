import Link from 'next/link'

export default function Home() {
    return (
        <>
            <main>
                {/* jumbotron */}
                <section id='jumbotron' className='bg-campo bg-cover bg-center'>
                    <div className='bg-black/80 pt-80 pb-6 sm:pb-12'>
                        <div className='container mx-auto px-6 '>
                            <h2 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary font-bold'>23&ordf; edizione</h2>
                            <h5 className='text-2xl text-white font-bold mt-3'>Calcio Splash Lizzana</h5>
                            <h5 className='text-2xl text-white font-bold'>Dal 10 al 13 agosto 2023</h5>
                        </div>
                    </div>
                </section>

                {/* register */}
                <section id='register' className='bg-gray-50'>
                    <div className="container mx-auto relative">
                        <div className='flex justify-end'>
                            <img className='opacity-20 md:opacity-100 max-h-72' src="/static/palla-rete.png" alt="" />
                        </div>
                        {/* CONTENT */}
                        {/* <div className='absolute top-0 left-0 px-6 py-8 md:w-1/2 max-h-72'> */}
                        <div className='absolute top-0 left-0 px-6 py-8 md:w-1/2 max-h-72'>
                            <h5 className='text-2xl font-bold w-2/3'>
                                Il <span className='text-primary'>Mondiale</span> si gioca sul gonfiabile
                            </h5>

                            <p className='mt-4 font-light text-secondary'>Sai la differenza tra i mondiali classici e quelli sul sapone? quelli sul sapone non cambiano luogo ogni 4 anni.</p>

                            <Link className='block rounded-full bg-gradient-to-r from-primary-dark to-primary w-full py-2 mt-8 text-white text-center' href="iscrizioni">iscriviti</Link>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
