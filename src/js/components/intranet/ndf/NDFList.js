import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import {getPath} from '../../../utils/routes'
import moment from '../../../utils/moment'
import Link from '../../commons/Link'
import truncate from 'lodash/truncate'

const NDFList = ({ndfs, users, openDeleteNDFModal, closeDeleteNDFModal, deleteNDF, ndfToDelete}) => (
  <div className='NDF_list'>
    {ndfToDelete ? <DeleteModal close={closeDeleteNDFModal} deleteNDF={deleteNDF}/> : null}
    <Table
      elements={ndfs.map(ndf => {
        return {...ndf, date: moment(ndf.inscriptionDate).format('LL'), description: truncate(ndf.description, {length: 100})}
      })}
      columns={[
        {name: 'id', value: 'N°', order: 1},
        {name: 'description', value: 'Description'},
        {name: 'location', value: 'Localité'},
        {name: 'price', value: 'Montant TTC'},
        {name: 'date', value: 'Date'},
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Auteur', content: UserColums.bind(this, users), order: 2},
        {name: 'Actions', content: actionColums.bind(this, openDeleteNDFModal)}
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

const actionColums = (openDeleteNDFModal, element) => (
  <div className='NDF_actions'>
    <Link href={getPath('intranet-notes-de-frais-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
    <Link href={getPath('intranet-notes-de-frais-id-edit', {id: element.id})}><div className='fa fa-pencil button button-green'/></Link>
    <button className='fa fa-trash button button-red' onClick={() => openDeleteNDFModal(element.id)}/>
  </div>
)

export default NDFList
