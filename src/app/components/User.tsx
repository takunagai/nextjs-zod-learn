'use client'

import { useEffect } from 'react'

type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

const User = () => {
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch('http://localhost:3000/api')
            const user: UserType = await response.json()
            console.log(user.firstName)
        }

        getUser().then(r => console.log('User fetched'))
    }, [])

    return (
        <div>User</div>
    )
}

export default User