import React from 'react'
import Table from '../Table'
import moment from '../../utils/moment'
import {getPath} from '../../utils/routes'
import Link from '../commons/Link'

const CRAList = ({cras}) => (
  <div className='CRA_list'>
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
        {name: 'Actions', content: actionColums}
      ]}
    />
  </div>
)


const actionColums = (element) => (
  <div className='CRA_actions'>
    <Link href={getPath('intranet-cra-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
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
