import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Drive from './components/Drive'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import NonEmptyFolder from './components/folder/NonEmptyFolder'
import Landing from './components/Landing'
import Contact from "./components/Contact/Contact"


const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/drive' component={Drive} />
          <Route path='/contact' component={Contact} />
          <Route path='/folder/:id' component={NonEmptyFolder} />
        </Switch>
      </BrowserRouter>
  )
}

export default App