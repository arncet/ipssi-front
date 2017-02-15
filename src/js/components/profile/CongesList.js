import React from 'react'
import Table from '../Table'
import moment from '../../utils/moment'
import {getPath} from '../../utils/routes'
import Link from '../commons/Link'

const CongesList = ({conges}) => (
  <div className='Conges_list'>
    <Table
      elements={conges.map(conge => {
        return {...conge, periodeStart: moment(conge.periodeStart).format('LL'), periodeEnd: moment(conge.periodeEnd).format('LL')}
      })}
      columns={[
        {name: 'periodeStart', value: 'Début de la période'},
        {name: 'periodeEnd', value: 'Fin de la période'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Validé', content: CongesValid},
        {name: 'Actions', content: actionColums}
      ]}
    />
  </div>
)

const actionColums = (element) => (
  <div className='Conges_actions'>
    <Link href={getPath('intranet-demandes-de-conges-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
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
