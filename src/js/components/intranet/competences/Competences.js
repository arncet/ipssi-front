import React from 'react'

//Components
import Header from './Header'
import CVList from './CVList'

const CV = ({cvs, users, openDeleteCVModal, closeDeleteCVModal, cvToDelete, deleteCV}) => (
  <div className='Intranet_page Intranet_page_CV'>
    <Header/>
    <CVList
      cvs={cvs}
      users={users}
      openDeleteCVModal={openDeleteCVModal}
      closeDeleteCVModal={closeDeleteCVModal}
      cvToDelete={cvToDelete}
      deleteCV={deleteCV}
    />
  </div>
)

export default CV
