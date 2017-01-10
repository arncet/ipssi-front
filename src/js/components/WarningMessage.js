import React from 'react'

const WarningMessage = ({message}) => {
  return message ? <div className='warning-message' dangerouslySetInnerHTML={{__html: message}}></div> : <noscript/>
}

export default WarningMessage
