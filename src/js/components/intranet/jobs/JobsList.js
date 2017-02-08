import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const JobsList = ({jobs, openDeleteJobsModal, closeDeleteJobsModal, deleteJob, jobToDelete}) => (
  <div className='Jobs_list'>
    {jobToDelete ? <DeleteModal close={closeDeleteJobsModal} deleteJob={deleteJob} job={jobToDelete}/> : null}
    <Table
      elements={jobs.map(job => {
        return {...job, date: moment(job.date).format('LL')}
      })}
      columns={[
        {name: 'title', value: 'Titre'},
        {name: 'date', value: 'Date'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Disponible', content: JobsAvaliable},
        {name: 'Actions', content: actionColums.bind(this, openDeleteJobsModal)}
      ]}
    />
  </div>
)

const actionColums = (openDeleteJobsModal, element) => (
  <div className='Jobs_actions'>
    <Link className='fa fa-eye button button-blue' href={getPath('intranet-offres-de-poste-id', {id: element.id})}/>
    <Link className='fa fa-pencil button button-green' href={getPath('intranet-offres-de-poste-id-edit', {id: element.id})}/>
    <button className='fa fa-trash button button-red' onClick={() => openDeleteJobsModal(element.id)}/>
  </div>
)

const JobsAvaliable = element => {
  const icon = element.avaliable ? 'fa fa-check' : 'fa fa-times'
  return <span className={icon}/>
}

export default JobsList
