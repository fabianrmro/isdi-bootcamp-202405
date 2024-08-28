import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import logic from '../../logic'

import User from './User'

export default function ResultsList({ refreshStamp }) {
    console.debug('ResultsList -> call')

    const [searchParams] = useSearchParams()

    const q = searchParams.get('q') || ''

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.debug('ResultsPostList -> useEffect [refreshStamp, q]')

        loadUsers()
    }, [refreshStamp, q])

    const handleUserLikeToggled = () => {
        console.debug('ResultsPostList -> handleLikeToggled')

        loadUsers()
    }

    const handleUserDislikeToggled = () => {
        console.debug('ResultsPostList -> handleUserDislikeToggled')

        loadUsers()
    }

    const handleUserFavToggled = () => {
        console.debug('ResultsPostList -> handleUserFavToggled')

        loadUsers()
    }


    const loadUsers = () => {
        try {
            logic.searchUser(q)
                .then(users => setUsers(users))
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