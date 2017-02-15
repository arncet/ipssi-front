import React from 'react'

//Components
import Header from './Header'
import CRAList from './CRAList'

const CRA = ({cras, users, openDeleteCRAModal, closeDeleteCRAModal, craToDelete, deleteCRA}) => (
  <div className='Intranet_page Intranet_page_CRA'>
    <Header/>
    <CRAList
      cras={cras}
      users={users}
      openDeleteCRAModal={openDeleteCRAModal}
      closeDeleteCRAModal={closeDeleteCRAModal}
      craToDelete={craToDelete}
      deleteCRA={deleteCRA}
    />
  </div>
)

export default CRA
