import React, {cloneElement} from 'react'

//Components
import Header from './Header'
import Footer from './Footer'

const Wrapper = ({children, ...props}) => (
  <div className="Wrapper">
    <Header/>
    {cloneElement(children, props)}
    <Footer/>
  </div>
)

export default Wrapper
