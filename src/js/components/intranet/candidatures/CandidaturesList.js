import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const CandidaturesList = ({candidatures, jobs, cvs, users, openDeleteCandidaturesModal, closeDeleteCandidaturesModal, deleteCandidature, candidatureToDelete, validCandidature, unValidCandidature}) => (
  <div className='Candidatures_list'>
    {candidatureToDelete ? <DeleteModal close={closeDeleteCandidaturesModal} candidature={candidatureToDelete} deleteCandidature={deleteCandidature}/> : null}
    <Table
      elements={candidatures.map(candidature => {
        return {...candidature, date: moment(candidature.date).format('LL')}
      })}
      columns={[
        {name: 'date', value: 'Date'}
      ]}
      customColums={[
        {name: 'Utilisateur', content: UserColums.bind(this, users), order: 1},
        {name: 'Offre', content: JobColums.bind(this, jobs), order: 2},
        {name: 'CV', content: CVColums.bind(this, cvs), order: 3},
        {name: 'Valide', content: CandidaturesValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteCandidaturesModal, validCandidature, unValidCandidature)}
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

const JobColums = (jobs, element) => {
  const job = jobs[element.jobId]
  return (
    <div className='Link_list'>
      <Link href={getPath('intranet-offres-de-poste-id', {id: job.id})}>
        {job.title}
      </Link>
    </div>
  )
}

const CVColums = (cvs, element) => {
  const cv = cvs[element.cvId]
  return (
    <div className='Link_list'>
      <Link href={getPath('intranet-cvtheque-id', {id: cv.id})}>
        {cv.title}
      </Link>
    </div>
  )
}

const actionColums = (openDeleteCandidaturesModal, validCandidature, unValidCandidature, element) => (
  <div className='Candidatures_actions'>
    {
      element.validStatus === 'valid'
        ? <div className='fa fa-times button button-red' onClick={() => unValidCandidature(element.id)}/>
        : <div className='fa fa-check button button-green' onClick={() => validCandidature(element.id)}/>
    }
    <button className='fa fa-trash button button-red' onClick={() => openDeleteCandidaturesModal(element.id)}/>
  </div>
)

const CandidaturesValid = element => {
  let icon = 'fa fa-'
  if (element.validStatus === 'pending') icon += 'spinner'
  else if (element.validStatus === 'valid') icon += 'check'
  else icon += 'times'
  return <span className={icon}/>
}

export default CandidaturesList
