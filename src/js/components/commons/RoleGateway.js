import React from 'react'

const RoleGateway = ({pass, children}) => {
  return pass ? children : null
}

export default RoleGateway
