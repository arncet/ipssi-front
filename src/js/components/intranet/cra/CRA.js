import React from 'react'

//Components
import Header from './Header'
import CRAList from './CRAList'

const CRA = ({cras, openDeleteCRAModal, closeDeleteCRAModal, craToDelete, deleteCRA}) => (
  <div className='Intranet_page Intranet_page_CRA'>
    <Header/>
    <CRAList
      cras={cras}
      openDeleteCRAModal={openDeleteCRAModal}
      closeDeleteCRAModal={closeDeleteCRAModal}
      craToDelete={craToDelete}
      deleteCRA={deleteCRA}
    />
  </div>
)

export default CRA
