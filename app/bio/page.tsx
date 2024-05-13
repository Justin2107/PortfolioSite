import React from 'react'
import Link from 'next/link'
import RootLayout from '../layout'

export default function Bio() {
  //throw new Error('broken')
  return (
    <RootLayout>
      <div className='content'>
        <h1>Bio</h1>
        <Link href="/">Link to homepage</Link>
      </div>
    </RootLayout>
    
  )
}
