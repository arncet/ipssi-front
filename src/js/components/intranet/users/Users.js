import React from 'react'

//Components
import Header from './Header'
import UsersList from './UsersList'

const Users = ({users, openDeleteUserModal, closeDeleteUserModal, userToDelete, deleteUser}) => (
  <div className='Intranet_page Intranet_page_User'>
    <Header/>
    <UsersList
      users={users}
      openDeleteUserModal={openDeleteUserModal}
      closeDeleteUserModal={closeDeleteUserModal}
      userToDelete={userToDelete}
      deleteUser={deleteUser}
    />
  </div>
)

export default Users
