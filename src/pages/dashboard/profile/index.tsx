import { DashLayout } from '@/src/layouts/DashLayout'
import { ReactElement } from 'react'

export default function index() {
  return (
    <div>profile</div>
  )
}

// layout 
index.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashLayout>{page}</DashLayout>
    )
}
