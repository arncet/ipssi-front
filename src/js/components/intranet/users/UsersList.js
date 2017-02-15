import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import {getPath} from '../../../utils/routes'
import moment from '../../../utils/moment'
import Link from '../../commons/Link'
import {roleIdToText} from '../../../utils/roles'

const UserList = ({users, openDeleteUserModal, closeDeleteUserModal, deleteUser, userToDelete}) => (
  <div className='User_list'>
    {userToDelete ? <DeleteModal close={closeDeleteUserModal} deleteUser={deleteUser} user={userToDelete}/> : null}
    <Table
      elements={users.map(user => {
        return {...user, inscriptionDate: moment(user.inscriptionDate).format('LL'), role: roleIdToText(user.role)}
      })}
      columns={[
        {name: 'lastName', value: 'Nom'},
        {name: 'firstName', value: 'Prenom'},
        {name: 'email', value: 'E-mail'},
        {name: 'phone', value: 'Téléphone'},
        {name: 'role', value: 'Rôle'},
        {name: 'inscriptionDate', value: 'Date d\'inscription'},
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Actions', content: actionColums.bind(this, openDeleteUserModal)}
      ]}
    />
  </div>
)

const actionColums = (openDeleteUserModal, element) => (
  <div className='User_actions'>
    <Link href={getPath('intranet-users-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
    <Link href={getPath('intranet-users-id-edit', {id: element.id})}><div className='fa fa-pencil button button-green'/></Link>
    <button className='fa fa-trash button button-red' onClick={() => openDeleteUserModal(element.id)}/>
  </div>
)

export default UserList
