import React from 'react'
import QueryGoogleAuth from '../../../containers/queries/GoogleAuth'

const Messages = ({sendMessage}) => (
  <div>
    <QueryGoogleAuth/>
    MESSAGE
    <button onClick={() => sendMessage()}>SEND EMAIL</button>
  </div>
)

export default Messages

