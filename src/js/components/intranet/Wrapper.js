import React, {cloneElement} from 'react'

//Components
import Header from './Header'
import Footer from '../Footer'

const WrapperIntranet = ({ children, ...props }) => (
  <div className="Wrapper_intranet">
    <Header {...props}/>
    { cloneElement(children, props) }
    <Footer/>
  </div>
)

export default WrapperIntranet
