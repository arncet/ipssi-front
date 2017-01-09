import React, {cloneElement} from 'react'
import ReactTooltip from 'react-tooltip'

//Components
import Header from './Header'
import Footer from '../Footer'
import Notifications from '../../containers/Notifications'

const WrapperIntranet = ({children, ...props}) => (
  <div className="Wrapper_intranet">
    <Header {...props}/>
    {cloneElement(children, props)}
    <Footer/>
    <ReactTooltip place="top" type="dark" effect="solid"/>
    <Notifications/>
  </div>
)

export default WrapperIntranet
