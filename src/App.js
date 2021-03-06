import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import { Navbar, Footer } from './components'
import { Home } from './pages'

const App = () => {

  return (
    <Router>

      <GlobalStyle />
      <Navbar/>

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer/>

    </Router>
  )
}

export default App
