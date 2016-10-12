import React from 'react'
import moment from '../../utils/moment'
import { capitalize, truncate } from 'lodash'

const Job = ({ job: { id, title, description, date } }) => (
  <li className="Job">
    <div className="Triangle"/>
    <div className="Dates">
      <div className="Date_from_now">{ capitalize(moment(date).fromNow()) }</div>
      <div className="Date">{ moment(date).format('DD-MM-YYYY') }</div>
    </div>
    <div className="Content">
      <a className="Link" href={ `/postes-a-pourvoir/${id}` }>{ title }</a>
      <p>{ truncate(description, { length: 100, separator: ' ', omission: ' ...' }) }</p>
    </div>
  </li>
)

export default Job
