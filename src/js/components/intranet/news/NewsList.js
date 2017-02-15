import React from 'react'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'
import truncate from 'lodash/truncate'

import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import Link from '../../commons/Link'

const NewsList = ({allNews, users, openDeleteNewsModal, closeDeleteNewsModal, deleteNews, newsToDelete}) => (
  <div className='News_list'>
    {newsToDelete ? <DeleteModal close={closeDeleteNewsModal} deleteNews={deleteNews} news={newsToDelete}/> : null}
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
        {name: 'Auteur', content: UserColums.bind(this, users), order: 1},
        {name: 'Visible', content: NewsVisible},
        {name: 'Actions', content: actionColums.bind(this, openDeleteNewsModal)}
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

const actionColums = (openDeleteNewsModal, element) => (
  <div className='News_actions'>
    <Link href={getPath('intranet-news-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
    <Link href={getPath('intranet-news-id-edit', {id: element.id})}><div className='fa fa-pencil button button-green'/></Link>
    <button className='fa fa-trash button button-red' onClick={() => openDeleteNewsModal(element.id)}/>
  </div>
)

const NewsVisible = element => {
  const icon = `fa fa-${element.hidden ? 'times' : 'check'}`
  return <span className={icon}/>
}

export default NewsList
