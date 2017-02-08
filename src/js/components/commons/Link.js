import React from 'react'
import {Link} from 'react-router'

const CommonLink = ({href, className = '', children}) => (
  <div className={className} style={{display: 'inline-block'}}>
    <Link to={href}>{children}</Link>
  </div>
)

export default CommonLink
