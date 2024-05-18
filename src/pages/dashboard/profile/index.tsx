import { DashLayout } from '@/src/layouts/DashLayout'
import { ReactElement, useEffect, useState } from 'react'

export default function index() {

    const [user, setUser] = useState<any>()

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user') || ''))
        }
        // console.log(user);

    }, [])

    return (
        <div>
            <h2 className='text-2xl font-semibold'>I MIEI DATI</h2>

            <div className='mt-4'>
                <div className='text-sm text-title-gray'>Nome Cognome:</div>
                <div className='mt-1 text-sm'> {user?.name} {user?.surname}</div>
            </div>

            <div className='mt-4'>
                <div className='text-sm text-title-gray'>Data di nascita:</div>
                <div className='mt-1 text-sm'> {user?.birthdate} </div>
            </div>

            <div className='mt-4'>
                <div className='text-sm text-title-gray'>Email:</div>
                <div className='mt-1 text-sm'> {user?.email}</div>
            </div>

            <div className='mt-4'>
                <div className='text-sm text-title-gray'>Username:</div>
                <div className='mt-1 text-sm'> {user?.username}</div>
            </div>
        </div>
    )
}

// layout 
index.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashLayout>{page}</DashLayout>
    )
}
