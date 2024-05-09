import React from 'react'

export default async function getUser(userId: string) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if (!responce.ok){return undefined}

    return (
        responce.json()
    )
}
