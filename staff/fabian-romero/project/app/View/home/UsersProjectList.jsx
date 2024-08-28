import logic from '../../logic'

import { useState, useEffect } from 'react'

import User from './User'

export default function UserProjectList({ refreshStamp }) {
    console.debug('UsersInvestorList -> call')

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.debug('UsersInvestorList -> useEffect')

        loadUsers()
    }, [refreshStamp])


    const handleUserFavToggled = () => {
        console.debug('UsersInvestorList -> handleUserFavToggled')
        loadUsers()
    }

    const handleUserLikeToggled = () => {
        console.debug('UsersInvestorList -> handleUserLikeToggled')
        loadUsers()
    }

    const handleUserDislikeToggled = () => {
        console.debug('UsersInvestorList -> handleUserDislikeToggled')
        loadUsers()
    }

    const loadUsers = () => {
        try {
            logic.getAllInvestors()
                .then(users => {
                    setUsers(users)
                    console.log(users)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }
    return <section className="flex flex-col gap-4">
        {users.map(user => <User
            key={user.id}
            user={user}
            onUserLikeToggled={handleUserLikeToggled}
            onUserFavToggled={handleUserFavToggled}
            onUserDislikeToggled={handleUserDislikeToggled}
        />)}
    </section>
}