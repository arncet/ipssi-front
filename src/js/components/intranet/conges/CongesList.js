import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const CongesList = ({conges, users, openDeleteCongesModal, closeDeleteCongesModal, deleteConges, congesToDelete}) => (
  <div className='Conges_list'>
    {congesToDelete ? <DeleteModal close={closeDeleteCongesModal} deleteConges={deleteConges}/> : null}
    <Table
      elements={conges.map(conge => {
        return {...conge, periodeStart: moment(conge.periodeStart).format('LL'), periodeEnd: moment(conge.periodeEnd).format('LL')}
      })}
      columns={[
        {name: 'periodeStart', value: 'Début de la période'},
        {name: 'periodeEnd', value: 'Fin de la période'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Demandeur', content: UserColums.bind(this, users), order: 1},
        {name: 'Validé', content: CongesValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteCongesModal)}
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

const actionColums = (openDeleteCongesModal, element) => (
  <div className='Conges_actions'>
    <Link href={getPath('intranet-demandes-de-conges-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
    {element.validationStatus !== 'valid' ? <Link href={getPath('intranet-demandes-de-conges-id-edit', {id: element.id})}><div className='fa fa-pencil button button-green'/></Link> : null}
    <button className='fa fa-trash button button-red' onClick={() => openDeleteCongesModal(element.id)}/>
  </div>
)

const CongesValid = element => {
  let icon = 'fa fa-'
  if (element.validationStatus === 'pending') icon += 'spinner'
  else if (element.validationStatus === 'valid') icon += 'check'
  else icon += 'times'
  return <span className={icon}/>
}

export default CongesList
