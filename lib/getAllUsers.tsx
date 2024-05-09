import React from 'react'

export default async function getAllUsers() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!responce.ok){
        throw new Error('Failed to fetch data')
    }
    return (
        responce.json()
    )
}
