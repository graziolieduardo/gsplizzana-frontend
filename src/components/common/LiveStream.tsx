import React from 'react'
import { Title } from './Title'

export default function LiveStream() {
    return (
        <div>
            <section id='liveStream' className="bg-gradient-to-r from-primary-dark to-primary">
                <div className='px-4 py-12 max-w-container 2xl:max-w-container-xl mx-auto lg:flex'>
                    <div className='lg:w-1/2 text-white'>
                        <Title variant={Title.variant.tertiary}>Seguici in diretta</Title>
                        <p className=' mt-8 w-full lg:w-2/3'>Rimani sempre connesso.</p>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </p> */}
                    </div>

                    <div className='lg:block lg:w-1/2 font-sm mt-6 lg:mt-0'>

                        {/*  change the video id for the gsp one. */}
                        <iframe className='h-[40vh] w-full' width="965" height="543" src="https://www.youtube.com/embed/hyaYy9X_d7Y" title="Calciosplash 2023 - Day 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/pRqQwevFRxk" title="Calciosplash 2023 - Day 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/XE0xHWTKj6E" title="Calciosplash 2023 - Day 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
                        {/* <iframe className='h-[40vh] w-full' width="965" height="543" src="https://youtube.com/embed/o-tPzqgWV6Y" title="Calciosplash 2023 - Day 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
                    </div>

                </div>
                <div className='max-w-container px-4 pb-4'>
                    <a href="https://www.youtube.com/embed/hyaYy9X_d7Y" target='_blank'>Seguici in diretta</a>
                </div>
            </section>
        </div>
    )
}

