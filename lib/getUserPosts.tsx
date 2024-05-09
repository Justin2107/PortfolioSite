import React from 'react'

export default async function getUserPosts(userId: string) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: { revalidate: 60}})

    if (!responce.ok){return undefined}

    return (
        responce.json()
    )
}
