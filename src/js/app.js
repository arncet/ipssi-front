import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
//Site
import Wrapper from './components/Wrapper'
import Home from './components/home/Home'
//Intranet
import WrapperIntranet from './components/intranet/Wrapper'
import HomeIntranet from './components/intranet/home/Home'
import NewsIntranets from './components/intranet/news/News'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/'>
      <Route component={Wrapper}>
        <IndexRoute component={Home}/>
      </Route>
      <Route path='intranet' component={WrapperIntranet}>
        <IndexRoute component={HomeIntranet}/>
        <Route path='actualites' component={NewsIntranets}/>
      </Route>
    </Route>
  </Router>
)

export default App
