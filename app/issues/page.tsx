"use client"
import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <p>issues page</p>
      <Button><Link href="/issues/new"
      >new issue</Link></Button>
    </div>

  )
}

export default page