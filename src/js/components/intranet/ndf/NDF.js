import React from 'react'

//Components
import Header from './Header'
import NDFList from './NDFList'

const NDF = ({ndfs, users, openDeleteNDFModal, closeDeleteNDFModal, ndfToDelete, deleteNDF}) => (
  <div className='Intranet_page Intranet_page_NDF'>
    <Header/>
    <NDFList
      ndfs={ndfs}
      users={users}
      openDeleteNDFModal={openDeleteNDFModal}
      closeDeleteNDFModal={closeDeleteNDFModal}
      ndfToDelete={ndfToDelete}
      deleteNDF={deleteNDF}
    />
  </div>
)

export default NDF
