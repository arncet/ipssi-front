import React from 'react'

const CustomMessage = ({message, backgroundColor, borderColor}) => {
  return message
    ? <div
        className='custom-message'
        dangerouslySetInnerHTML={{__html: message}}
        style={{backgroundColor, borderColor}}
      />
    : <noscript/>
}

export default CustomMessage
