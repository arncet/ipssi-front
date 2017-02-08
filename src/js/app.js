import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//Components
//Site
import Wrapper from './components/Wrapper'
import Home from './containers/Home'
//Intranet
import WrapperIntranet from './components/intranet/Wrapper'
import HomeIntranet from './components/intranet/home/Home'

import MessagesIntranet from './containers/intranet/Messages'
import CalendarIntranet from './containers/intranet/Calendar'

import NewsList from './containers/intranet/news/NewsList'
import NewsCreate from './containers/intranet/news/NewsCreate'
import NewsEdit from './containers/intranet/news/NewsEdit'
import News from './containers/intranet/news/News'

import CRAList from './containers/intranet/cra/CRAList'
import CRACreate from './containers/intranet/cra/CRACreate'
import CRAEdit from './containers/intranet/cra/CRAEdit'
import CRA from './containers/intranet/cra/CRA'

import CongesList from './containers/intranet/conges/CongesList'
import CongesCreate from './containers/intranet/conges/CongesCreate'
import CongesEdit from './containers/intranet/conges/CongesEdit'
import Conges from './containers/intranet/conges/Conges'

import CVList from './containers/intranet/cv/CVList'
import CVCreate from './containers/intranet/cv/CVCreate'
import CVEdit from './containers/intranet/cv/CVEdit'
import CV from './containers/intranet/cv/CV'

import JobsList from './containers/intranet/jobs/JobsList'
import JobsCreate from './containers/intranet/jobs/JobsCreate'
import JobsEdit from './containers/intranet/jobs/JobsEdit'
import Jobs from './containers/intranet/jobs/Jobs'

const App = ({ history }) => (
  <Router history={history}>
    <Route path='/'>
      <Route component={Wrapper}>
        <IndexRoute component={Home}/>
      </Route>
      <Route path='intranet' component={WrapperIntranet}>
        <IndexRoute component={HomeIntranet}/>
        <Route path='messages' component={MessagesIntranet}/>
        <Route path='calendrier' component={CalendarIntranet}/>

        <Route path='actualites' component={NewsList}/>
        <Route path='actualites/creer' component={NewsCreate}/>
        <Route path='actualites/:id' component={News}/>
        <Route path='actualites/:id/editer' component={NewsEdit}/>

        <Route path='comptes-rendus-d-activites' component={CRAList}/>
        <Route path='comptes-rendus-d-activites/creer' component={CRACreate}/>
        <Route path='comptes-rendus-d-activites/:id' component={CRA}/>
        <Route path='comptes-rendus-d-activites/:id/editer' component={CRAEdit}/>

        <Route path='demandes-de-conges' component={CongesList}/>
        <Route path='demandes-de-conges/creer' component={CongesCreate}/>
        <Route path='demandes-de-conges/:id' component={Conges}/>
        <Route path='demandes-de-conges/:id/editer' component={CongesEdit}/>

        <Route path='cvtheque' component={CVList}/>
        <Route path='cvtheque/creer' component={CVCreate}/>
        <Route path='cvtheque/:id' component={CV}/>
        <Route path='cvtheque/:id/editer' component={CVEdit}/>

        <Route path='offres-de-poste' component={JobsList}/>
        <Route path='offres-de-poste/creer' component={JobsCreate}/>
        <Route path='offres-de-poste/:id' component={Jobs}/>
        <Route path='offres-de-poste/:id/editer' component={JobsEdit}/>
      </Route>
    </Route>
  </Router>
)

export default App
