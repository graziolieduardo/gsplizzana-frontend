import { DashLayout } from '@/src/layouts/DashLayout'
import { ReactElement } from 'react'

export default function index() {

    return (
        <div>
            <h2 className='text-2xl font-semibold'>I MIEI DATI</h2>
        </div>
    )
}

// layout 
index.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashLayout>{page}</DashLayout>
    )
}
