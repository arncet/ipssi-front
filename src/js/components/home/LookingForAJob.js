import React from 'react'

//Components
import Job from './Job'

const LookingForAJob = ({jobs}) => (
  <div className="Looking_for_a_job">
    <h2 className="Looking_for_a_job_title">Postes à pourvoir : </h2>
    <ul className="Looking_for_a_job_list">
      { jobs.map((job, i) => <Job job={ job } key={ i }/>) }
    </ul>
  </div>
)

export default LookingForAJob
