import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Hello from './Hello'
import Header from './Header'
import Footer from './Footer'
import UsersInvestorList from './UsersInvestorList'
import UsersProjectList from './UsersProjectList'
import FavsList from './FavsList'
import LikesList from './LikesList'
import Profile from './Profile'
import ResultsList from './ResultsList'

import logic from '../../logic'
import Paragraph from '../library/Paragraph'

export default function Home({ onLogout }) {
    console.debug('Home -> call')

    const navigate = useNavigate()
    const [userRole, setUserRole] = useState(null)
    const [refreshStamp, setRefreshStamp] = useState(null)


    useEffect(() => {
        console.debug('Home -> useEffect')

        try {
            logic.getUserRole()
                .then(role => {
                    setUserRole(role)
                    if (role === 'investor') {
                        navigate('/')

                    } else if (role === 'project') {
                        navigate('/')
                    }
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }

    }, [])


    const handleHomeClick = () => {
        console.debug('Home -> handleHomeClick')
        navigate('/')
    }

    const handleFavsClick = () => {
        console.debug('Home -> handleFavsClick')
        navigate('/favs')
    }

    const handleLikeClick = () => {
        console.debug('Home -> handleLikeClick')
        navigate('/likes')
    }

    const handleSearchClick = () => {
        console.debug('Home -> handleSearchClick')
        navigate('/search')
    }

    const handleProfileClicked = () => {
        console.debug('Home -> handleProfileClick')

        navigate('/profile')
    }

    return <>
        <Header
            onHomeClick={handleHomeClick}
            onFavsClick={handleFavsClick}
            onLikesClick={handleLikeClick}
            onLogout={onLogout}>
        </Header>

        <main className="flex flex-col items-center gap-4 mt-16 mb-12 dark:bg-black ">
            <Routes>
                <Route
                    path="/"
                    element={
                        userRole === 'investor' ?
                            <UsersInvestorList refreshStamp={refreshStamp} /> :
                            userRole === 'project' ?
                                <UsersProjectList refreshStamp={refreshStamp} /> :
                                <Paragraph text="Loading..." />
                    }
                />
                <Route path="/hello/:to" element={<Hello />} />
                <Route path="/favs" element={<FavsList />} />
                <Route path="/likes" element={<LikesList />} />
                <Route path="/search" element={<ResultsList />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>
        </main>

        <Footer
            onSearchClick={handleSearchClick}
            onProfileClicked={handleProfileClicked} />

    </>
}