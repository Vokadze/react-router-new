import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import SingIn from './components/singin'
import PostsList from './components/postList'
import Post from './components/post'
import Contacts from './components/contacts'

const posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
]

function App() {
  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singin" component={SingIn} />
        <Route path="/posts/:postId">
          {(props) => <Post {...props} posts={posts} />}
        </Route>
        <Route path="/posts">
          {(props) => <PostsList {...props} posts={posts} />}
        </Route>
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  )
}

export default App
