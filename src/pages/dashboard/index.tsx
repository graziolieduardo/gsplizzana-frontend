import { DashLayout } from '@/src/layouts/DashLayout'
import React, { ReactElement } from 'react'

export default function index() {
  return (
    
        <div className='bg-gray-100 rounded-lg p-4 border'>Team name </div>
      )
    }

    index.getLayout = function getLayout(page: ReactElement) {
      return (
        <DashLayout>{page}</DashLayout>
      )
    }
