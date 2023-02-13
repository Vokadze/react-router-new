import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import SingIn from './components/singin'
import Contacts from './components/contacts'
import Posts from './components/posts'
//import Post from './components/post'

function App() {

   // Последовательность параметров в URL полученных из CMS
//const pathConfig = ['year', 'mounth', 'date', 'slug']
// Паттерн для роута
//const routePath = "/:" + pathConfig.join('/:') // -> /:year/:mounth/:date/:slug

  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singin" component={SingIn} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/contacts" component={Contacts} />
        {/*<Route path="/catalog/:category?/subCategoy?">
          {({ match }) => <pre>{JSON.stringify(match.params)}</pre>}
        </Route>*/}
        {/*<Route path={routePath} component={Post} />*/}
      </Switch>
    </div>
  )
}

export default App
