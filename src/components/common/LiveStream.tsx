import React from 'react'
import { Title } from './Title'

export default function
    () {
    return (
        <div>
            <section id='liveStream' className="bg-gradient-to-r from-primary-dark to-primary">
                <div className='px-4 py-12 max-w-container 2xl:max-w-container-xl mx-auto lg:flex'>
                    <div className='lg:w-1/2 text-white'>
                        <Title variant={Title.variant.tertiary}>Seguici in diretta</Title>
                        <p className=' mt-8 w-full lg:w-2/3'>Rimani sempre connesso.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </p>
                    </div>

                    <div className='lg:block lg:w-1/2 font-sm mt-6 lg:mt-0'>
                        
                        {/*  change the video id for the gsp one. */}
                        <iframe src="https://youtube.com/live/hyaYy9X_d7Y?feature=share" className=' h-[40vh] w-full' />
                        {/* <iframe src="https://youtube.com/live/pRqQwevFRxk?feature=share" className=' h-[40vh] w-full' /> */}
                        {/* <iframe src="https://youtube.com/live/XE0xHWTKj6E?feature=share" className=' h-[40vh] w-full' /> */}
                        {/* <iframe src="https://youtube.com/live/o-tPzqgWV6Y?feature=share" className=' h-[40vh] w-full' /> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

