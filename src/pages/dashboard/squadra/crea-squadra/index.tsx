import { DashLayout } from '@/src/layouts/DashLayout'
import React, { ReactElement } from 'react'

export default function index() {
  return (
    <div>crea squadra</div>
  )
}


index.getLayout = function getLayout(page: ReactElement) {
    return (
      <DashLayout>{page}</DashLayout>
    )
  }