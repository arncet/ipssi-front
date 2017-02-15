import React from 'react'

//Components
import Header from './Header'
import CongesList from './CongesList'

const Conges = ({conges, users, openDeleteCongesModal, closeDeleteCongesModal, congesToDelete, deleteConges}) => (
  <div className='Intranet_page Intranet_page_Conges'>
    <Header/>
    <CongesList
      conges={conges}
      users={users}
      openDeleteCongesModal={openDeleteCongesModal}
      closeDeleteCongesModal={closeDeleteCongesModal}
      congesToDelete={congesToDelete}
      deleteConges={deleteConges}
    />
  </div>
)

export default Conges
