import React from 'react'
import Table from '../Table'
import moment from '../../utils/moment'
import {getPath} from '../../utils/routes'
import Link from '../commons/Link'

const CandidaturesList = ({candidatures, jobs}) => (
  <div className='Candidatures_list'>
    <Table
      elements={candidatures.map(candidature => {
        return {...candidature, date: moment(candidature.date).format('LL')}
      })}
      columns={[
        {name: 'date', value: 'Date'}
      ]}
      customColums={[
        {name: 'Offre', content: JobColums.bind(this, jobs), order: 2},
        {name: 'Valide', content: CandidaturesValid}
      ]}
    />
  </div>
)

const JobColums = (jobs, element) => {
  const job = jobs.find(j => j.id === element.jobId)
  return (
    <div className='Link_list'>
      <Link href={getPath('offres-de-poste-id', {id: job.id})}>
        {job.title}
      </Link>
    </div>
  )
}

const CandidaturesValid = element => {
  let icon = 'fa fa-'
  if (element.validStatus === 'pending') icon += 'spinner'
  else if (element.validStatus === 'valid') icon += 'check'
  else icon += 'times'
  return <span className={icon}/>
}

export default CandidaturesList
