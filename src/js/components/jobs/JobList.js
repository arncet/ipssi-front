import React from 'react'
import truncate from 'lodash/truncate'
import moment from '../../utils/moment'
import {getPath} from '../../utils/routes'
import Link from '../commons/Link'

const JobList = ({jobs}) => (
  <div className='Job_page Job_list'>
    <h1>Liste des offres de poste : </h1>
    <ul className='Jobs'>
      {jobs.map((job, i) => <Job key={i} job={job}/>)}
    </ul>
  </div>
)

const Job = ({job}) => (
  <div className={`Job Job_${job.avaliable ? 'avaliable' : 'unAvaliable'}`}>
    <Link href={getPath('offres-de-poste-id', {id: job.id})}>
      <div className='Job_title'>
        {job.title}
        <span className='Job_date'> {moment(job.date).format('LL')}</span>
      </div>
    </Link>
    <div className='Job_description'>{truncate(job.description, { length: 100, separator: ' ', omission: ' ...' })}</div>
  </div>
)

export default JobList
