import logic from '../../../logic/index.mjs'

const { Component } = React

import Post from './Post.jsx'

class PostList extends Component {
    constructor() {
        console.debug('PostList -> contructor')

        super()

        try {
            const posts = logic.getAllPosts()

            this.state = { posts } // inicializar los post lo llamamos, se contruye y luego en render lo pinta y me devulve todo el DOM // es un estado 
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    componentWillReceiveProps(newProps) {
        console.debug('PostList -> componentWillReceiveProps', newProps, this.props) // esto es una funcion que tengo que saber que hace ciclo de vida del componente

        // react lo llama cuando detecta que cambia un props

        //se puede implementar a demanda y me dice que voy a recibir nuevos props (newProps)
        // new props

        if (newProps.refreshStamp !== this.props.refreshStamp)
            try {
                const posts = logic.getAllPosts()

                this.setState({ posts })
            } catch (error) {
                console.error(error)

                alert(error.message)
            }
    }

    handlePostDeleted() {// aqui llamo a la logica de deleted dentro del post list abajo
        try {
            const posts = logic.getAllPosts()

            this.setState({ posts })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    handlePostEdited() { // aqui llamo a la logica de edited  dentro del post list abajo
        try {
            const posts = logic.getAllPosts()

            this.setState({ posts })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    handlePostLikeToggled() {

        try {
            const posts = logic.getAllPosts()

            this.setState({ posts })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    handlePostFavToggled() {

        try {
            const posts = logic.getAllPosts()

            this.setState({ posts })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    handleUserFollowToggled() { // este es el mismo nombre que tengo en el renders

        try {
            const posts = logic.getAllPosts() // esta logica es la misma de arriba

            this.setState({ posts })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }



    render() {
        console.debug('PostList -> render')

        return <section className="post-list">
            {this.state.posts.map(post => <Post
                key={post.id}
                post={post}
                onPostDeleted={this.handlePostDeleted.bind(this)}
                onPostEdited={this.handlePostEdited.bind(this)}
                onPostLikeToggled={this.handlePostLikeToggled.bind(this)}
                onPostFavToggled={this.handlePostFavToggled.bind(this)}
                onUserFollowToggled={this.handleUserFollowToggled.bind(this)}
            />)}
        </section>
    }
}

export default PostList


//KEY OBLIOGATORIA PARA IDENTICAR EN ALGUN OTRO OBJETO IDENTIFICADOR DEL DATO CUANDO HAGO UN MAP, EN ALGUNO QUE SE REPITE LOS COMPONENTES TENGO QUE BUSCAR ALGO QUE LO IDENTIFIQUE Y LO PONGO ENTRE LAS LLAVES EN MODO DE IDENTIFICADOR