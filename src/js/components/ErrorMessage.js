import React from 'react'

const ErrorMessage = ({error}) => {
  return error ? <div className='error-message' dangerouslySetInnerHTML={{__html: error}}></div> : <noscript/>
}

export default ErrorMessage
