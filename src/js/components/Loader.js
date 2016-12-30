import React from 'react'

const Loader = ({message = 'Chargement en cours ...'}) => (
  <div className='Loader'>
    <div className='Spinner_and_message'>
      <div className="Spinner"/>
      <div className='Loader_message'>{message}</div>
    </div>
  </div>
)

export default Loader
