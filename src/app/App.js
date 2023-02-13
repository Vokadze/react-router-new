import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import SingIn from './components/singin'
import Contacts from './components/contacts'
import Posts from './components/posts'
//import Post from './components/post'

function App() {
  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singin" component={SingIn} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  )
}

export default App
