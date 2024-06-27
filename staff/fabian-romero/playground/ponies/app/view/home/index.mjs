import Component from '../Component.mjs'
import Header from './component/Header.mjs'
import PostList from './component/PostList.mjs'
import Footer from './component/Footer.mjs'


const home = new Component(document.body)
const header = new Header
home.add(header)

const body = new Component(document.createElement('main'))
body.setClassName('view main')
home.add(body)

const postList = new PostList
body.add(postList)

postList.listPosts()

const footer = new Footer
home.add(footer)

footer.onPostCreated(() => {
    postList.clearPosts()
    postList.listPosts()
})
