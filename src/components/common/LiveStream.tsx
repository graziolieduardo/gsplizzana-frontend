import React from 'react'
import { Title } from './Title'

export default function LiveStream() {
    return (
        <div>
            <section id='liveStream' className="bg-gradient-to-r from-primary-dark to-primary">
                <div className='px-6 py-12 max-w-container 2xl:max-w-container-xl mx-auto lg:flex'>
                    <div className='lg:w-1/2 text-white'>
                        <Title variant={Title.variant.tertiary}>Seguici in diretta</Title>
                        <p className=' mt-8 w-full lg:w-2/3'>Rimani sempre connesso.</p>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </p> */}
                    </div>

                    <div className='lg:block lg:w-1/2 font-sm mt-6 lg:mt-0'>

                        {/*  change the video id for the gsp one. */}
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/QLxakLKkUuM" title="Calciosplash 2024 - Day 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe> */}
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/Ijk7kUdhBkE" title="Calciosplash 2024 - Day 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe> */}
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/MzkO_n_hs3w" title="Calciosplash 2024 - Day 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe> */}
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/O0iE6P6lVB0" title="Calciosplash 2024 - Day 4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe> */}
                        <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/l5yZ88Lf2jY" title="Calciosplash 2024 - Day 4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/qOfy2u9bXUI" title="Calciosplash 2024 - Day 5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe> */}
                    </div>

                </div>
                {/* <div className='max-w-container px-4 pb-4'>
                    <a href="https://www.youtube.com/embed/hyaYy9X_d7Y" target='_blank'>Seguici in diretta</a>
                </div> */}
            </section>
        </div>
    )
}

