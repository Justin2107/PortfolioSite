import type { Metadata } from 'next';
import React from 'react'
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData
    console.log('Hello')

    const content = (
        <section className='content'>
            <br />
            {users.map(user => {
                return(
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )

  return (
    content
  )
}
