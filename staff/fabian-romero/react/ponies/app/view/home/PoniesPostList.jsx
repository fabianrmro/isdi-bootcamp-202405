import logic from '../../logic'

import { useState, useEffect } from 'react'

import Post from './Post'

export default function PoniesPostList() {
    console.debug('PoniesPostList -> call')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.debug('PoniesPostList -> useEffect')

        loadPosts()
    }, [])

    const handlePostDeleted = () => {
        console.debug('PoniesPostList -> handlePostDeleted')

        loadPosts()
    }

    const handlePostEdited = () => {
        console.debug('PoniesPostList -> handlePostEdited')

        loadPosts()
    }

    const handlePostLikeToggled = () => {
        console.debug('PoniesPostList -> handlePostLikeToggled')

        loadPosts()
    }

    const handlePostFavToggled = () => {
        console.debug('PoniesPostList -> handlePostFavToggled')

        loadPosts()
    }

    const handleUserFollowToggled = () => {
        console.debug('PoniesPostList -> handleUserFollowToggled')

        loadPosts()
    }

    const loadPosts = () => {
        try {
            logic.getAllPoniesPosts()
                .then(posts => setPosts(posts))
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
        {posts.map(post => <Post
            key={post.id}
            post={post}
            onPostDeleted={handlePostDeleted}
            onPostEdited={handlePostEdited}
            onPostLikeToggled={handlePostLikeToggled}
            onPostFavToggled={handlePostFavToggled}
            onUserFollowToggled={handleUserFollowToggled}
        />)}
    </section>
}