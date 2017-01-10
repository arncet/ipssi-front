import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
//Site
import Wrapper from './components/Wrapper'
import Home from './components/home/Home'
//Intranet
import WrapperIntranet from './components/intranet/Wrapper'
import HomeIntranet from './components/intranet/home/Home'

import NewsIntranet from './components/intranet/news/News'
import MessagesIntranet from './containers/intranet/Messages'
import CalendarIntranet from './containers/intranet/Calendar'

import CRAList from './containers/intranet/cra/CRAList'
import CRACreate from './containers/intranet/cra/CRACreate'
import CRAEdit from './containers/intranet/cra/CRAEdit'
import CRA from './containers/intranet/cra/CRA'

import CongesList from './containers/intranet/conges/CongesList'
import CongesCreate from './containers/intranet/conges/CongesCreate'
import CongesEdit from './containers/intranet/conges/CongesEdit'
import Conges from './containers/intranet/conges/Conges'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/'>
      <Route component={Wrapper}>
        <IndexRoute component={Home}/>
      </Route>
      <Route path='intranet' component={WrapperIntranet}>
        <IndexRoute component={HomeIntranet}/>
        <Route path='actualites' component={NewsIntranet}/>
        <Route path='messages' component={MessagesIntranet}/>
        <Route path='calendrier' component={CalendarIntranet}/>
        <Route path='comptes-rendus-d-activites' component={CRAList}/>
        <Route path='comptes-rendus-d-activites/creer' component={CRACreate}/>
        <Route path='comptes-rendus-d-activites/:id' component={CRA}/>
        <Route path='comptes-rendus-d-activites/:id/editer' component={CRAEdit}/>
        <Route path='demandes-de-conges' component={CongesList}/>
        <Route path='demandes-de-conges/creer' component={CongesCreate}/>
        <Route path='demandes-de-conges/:id' component={Conges}/>
        <Route path='demandes-de-conges/:id/editer' component={CongesEdit}/>
      </Route>
    </Route>
  </Router>
)

export default App
