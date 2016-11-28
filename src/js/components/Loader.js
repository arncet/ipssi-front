import React from 'react'

const Loader = (message = 'Chargement en cours ...') => (
  <div className='Loader'>
    <img src='assets/images/loader.svg' className='Loader_illu'/>
    <div className='Loader_messahe'>{message}</div>
  </div>
)

export default Loader
