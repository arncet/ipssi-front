import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const CVList = ({cvs, users, openDeleteCVModal, closeDeleteCVModal, deleteCV, cvToDelete}) => (
  <div className='CV_list'>
    {cvToDelete ? <DeleteModal close={closeDeleteCVModal} deleteCV={deleteCV} cv={cvToDelete}/> : null}
    <Table
      elements={cvs}
      columns={[
        {name: 'title', value: 'Titre'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Auteur', content: UserColums.bind(this, users), order: 1},
        {name: 'Validé', content: CVValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteCVModal)}
      ]}
    />
  </div>
)

const UserColums = (users, element) => {
  const user = users[element.userId]
  return (
    <div className='Link_list'>
      <Link href={getPath('intranet-users-id', {id: user.id})}>
        {`${user.lastName[0]}. ${user.firstName}`}
      </Link>
    </div>
  )
}

const actionColums = (openDeleteCVModal, element) => (
  <div className='CV_actions'>
    <Link href={getPath('intranet-cvtheque-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
    <Link href={getPath('intranet-cvtheque-id-edit', {id: element.id})}><div className='fa fa-pencil button button-green'/></Link>
    <button className='fa fa-trash button button-red' onClick={() => openDeleteCVModal(element.id)}/>
  </div>
)

const CVValid = element => {
  let icon = 'fa fa-'
  if (element.validationStatus === 'pending') icon += 'spinner'
  else if (element.validationStatus === 'valid') icon += 'check'
  else icon += 'times'
  return <span className={icon}/>
}

export default CVList
