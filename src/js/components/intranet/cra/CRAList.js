import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const CRAList = ({cras, users, openDeleteCRAModal, closeDeleteCRAModal, deleteCRA, craToDelete}) => (
  <div className='CRA_list'>
    {craToDelete ? <DeleteModal close={closeDeleteCRAModal} deleteCRA={deleteCRA} cra={craToDelete}/> : null}
    <Table
      elements={cras.map(cra => {
        return {...cra, periodeStart: moment(cra.periodeStart).format('LL'), periodeEnd: moment(cra.periodeEnd).format('LL')}
      })}
      columns={[
        {name: 'projet', value: 'Projet'},
        {name: 'nomClient', value: 'Client'},
        {name: 'periodeStart', value: 'Début de la période'},
        {name: 'periodeEnd', value: 'Fin de la période'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Utilisateur', content: UserColums.bind(this, users), order: 1},
        {name: 'Validé', content: CRAValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteCRAModal)}
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

const actionColums = (openDeleteCRAModal, element) => (
  <div className='CRA_actions'>
    <Link href={getPath('intranet-cra-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
    {element.validationStatus === 'valid' ? null : <Link href={getPath('intranet-cra-id-edit', {id: element.id})}><div className='fa fa-pencil button button-green'/></Link>}
    <button className='fa fa-trash button button-red' onClick={() => openDeleteCRAModal(element.id)}/>
  </div>
)

const CRAValid = element => {
  let icon = 'fa fa-'
  if (element.validationStatus === 'pending') icon += 'spinner'
  else if (element.validationStatus === 'valid') icon += 'check'
  else icon += 'times'
  return <span className={icon}/>
}

export default CRAList
