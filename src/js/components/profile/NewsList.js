import React from 'react'
import moment from '../../utils/moment'
import {getPath} from '../../utils/routes'
import truncate from 'lodash/truncate'

import Table from '../Table'
import Link from '../commons/Link'

const NewsList = ({allNews}) => (
  <div className='News_list'>
    <Table
      elements={allNews.map(news => {
        return {...news, date: moment(news.periodeStart).format('LL'), description: truncate(news.description, {length: 100})}
      })}
      columns={[
        {name: 'title', value: 'Titre'},
        {name: 'description', value: 'Description'},
        {name: 'date', value: 'Date de création'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Visible', content: NewsVisible},
        {name: 'Actions', content: actionColums}
      ]}
    />
  </div>
)

const actionColums = (element) => (
  <div className='News_actions'>
    <Link href={getPath('news-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
  </div>
)

const NewsVisible = element => {
  const icon = `fa fa-${element.hidden ? 'times' : 'check'}`
  return <span className={icon}/>
}

export default NewsList
