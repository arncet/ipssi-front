import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const CVList = ({cvs, openDeleteCVModal, closeDeleteCVModal, deleteCV, cvToDelete}) => (
  <div className='CV_list'>
    {cvToDelete ? <DeleteModal close={closeDeleteCVModal} deleteCV={deleteCV} cv={cvToDelete}/> : null}
    <Table
      elements={cvs}
      columns={[
        {name: 'author', value: 'Auteur'},
        {name: 'title', value: 'Titre'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Validé', content: CVValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteCVModal)}
      ]}
    />
  </div>
)

const actionColums = (openDeleteCVModal, element) => (
  <div className='CV_actions'>
    <Link className='fa fa-eye button button-blue' href={getPath('intranet-cvtheque-id', {id: element.id})}/>
    <Link className='fa fa-pencil button button-green' href={getPath('intranet-cvtheque-id-edit', {id: element.id})}/>
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
