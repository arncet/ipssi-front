import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
import Wrapper from './components/Wrapper'
import Home from './components/home/Home'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/'>
      <Route component={Wrapper}>
        <IndexRoute component={Home}/>
      </Route>
    </Route>
  </Router>
)

export default App
