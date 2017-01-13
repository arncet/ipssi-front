import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'

const JobsList = ({jobs, openDeleteJobsModal, closeDeleteJobsModal, deleteJobs, jobToDelete}) => (
  <div className='Jobs_list'>
    {jobToDelete ? <DeleteModal close={closeDeleteJobsModal} deleteJobs={deleteJobs} job={jobToDelete}/> : null}
    <Table
      elements={jobs.map(job => {
        return {...job, periodeStart: moment(job.periodeStart).format('LL'), periodeEnd: moment(job.periodeEnd).format('LL')}
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
        {name: 'Validé', content: JobsValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteJobsModal)}
      ]}
    />
  </div>
)

const actionColums = (openDeleteJobsModal, element) => (
  <div className='Jobs_actions'>
    <a className='fa fa-eye button button-blue' href={getPath('intranet-job-id', {id: element.id})}/>
    <a className='fa fa-pencil button button-green' href={getPath('intranet-job-id-edit', {id: element.id})}/>
    <button className='fa fa-trash button button-red' onClick={() => openDeleteJobsModal(element.id)}/>
  </div>
)

const JobsValid = element => {
  let icon = 'fa fa-'
  if (element.validationStatus === 'pending') icon += 'spinner'
  else if (element.validationStatus === 'valid') icon += 'check'
  else icon += 'times'
  return <span className={icon}/>
}

export default JobsList
