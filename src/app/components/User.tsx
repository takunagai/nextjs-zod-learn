'use client'

import { useEffect } from 'react'
import { z } from 'zod'

const UserSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
})

type UserType = z.infer<typeof UserSchema>

const User = () => {
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch('http://localhost:3000/api')
            const user: UserType = await response.json()
            const validatedUser = UserSchema.parse(user)
            console.log(validatedUser.firstName)
        }

        getUser().then(() => console.log('User fetched'))
    }, [])

    return (
        <div>User</div>
    )
}

export default User