import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'

const CRAList = ({cras, openDeleteCRAModal, closeDeleteCRAModal, deleteCRA, craToDelete}) => (
  <div className='CRA_list'>
    {craToDelete ? <DeleteModal close={closeDeleteCRAModal} deleteCRA={deleteCRA} cra={craToDelete}/> : null}
    <Table
      elements={cras.map(cra => {
        return {...cra, periodeStart: moment(cra.periodeStart).format('LL'), periodeEnd: moment(cra.periodeEnd).format('LL')}
      })}
      columns={[
        {name: 'consultant', value: 'Consultant'},
        {name: 'projet', value: 'Projet'},
        {name: 'nomClient', value: 'Client'},
        {name: 'periodeStart', value: 'Début de la période'},
        {name: 'periodeEnd', value: 'Fin de la période'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Validé', content: CRAValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteCRAModal)}
      ]}
    />
  </div>
)

const actionColums = (openDeleteCRAModal, element) => (
  <div className='CRA_actions'>
    <a className='fa fa-eye button button-blue' href={getPath('intranet-cra-id', {id: element.id})}/>
    <a className='fa fa-pencil button button-green' href={getPath('intranet-cra-id-edit', {id: element.id})}/>
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
