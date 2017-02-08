import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const CongesList = ({conges, openDeleteCongesModal, closeDeleteCongesModal, deleteConges, congesToDelete}) => (
  <div className='Conges_list'>
    {congesToDelete ? <DeleteModal close={closeDeleteCongesModal} deleteConges={deleteConges}/> : null}
    <Table
      elements={conges.map(conge => {
        return {...conge, periodeStart: moment(conge.periodeStart).format('LL'), periodeEnd: moment(conge.periodeEnd).format('LL')}
      })}
      columns={[
        {name: 'author', value: 'Demandeur'},
        {name: 'periodeStart', value: 'Début de la période'},
        {name: 'periodeEnd', value: 'Fin de la période'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Validé', content: CongesValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteCongesModal)}
      ]}
    />
  </div>
)

const actionColums = (openDeleteCongesModal, element) => (
  <div className='Conges_actions'>
    <Link className='fa fa-eye button button-blue' href={getPath('intranet-demandes-de-conges-id', {id: element.id})}/>
    <Link className='fa fa-pencil button button-green' href={getPath('intranet-demandes-de-conges-id-edit', {id: element.id})}/>
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
