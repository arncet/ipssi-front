import React from 'react'
import Table from '../../Table'
import DeleteModal from './modals/DeleteModal'
import moment from '../../../utils/moment'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const NewsList = ({allNews, openDeleteNewsModal, closeDeleteNewsModal, deleteNews, newsToDelete}) => (
  <div className='News_list'>
    {newsToDelete ? <DeleteModal close={closeDeleteNewsModal} deleteNews={deleteNews} news={newsToDelete}/> : null}
    <Table
      elements={allNews.map(news => {
        return {...news, date: moment(news.periodeStart).format('LL')}
      })}
      columns={[
        {name: 'title', value: 'Titre'},
        {name: 'author', value: 'Auteur'},
        {name: 'description', value: 'Description'},
        {name: 'date', value: 'Date de création'}
      ]}
      defaultSortedValue='consultant'
      customColums={[
        {name: 'Validé', content: NewsValid},
        {name: 'Actions', content: actionColums.bind(this, openDeleteNewsModal)}
      ]}
    />
  </div>
)

const actionColums = (openDeleteNewsModal, element) => (
  <div className='News_actions'>
    <Link href={getPath('intranet-news-id', {id: element.id})}><div className='fa fa-eye button button-blue'/></Link>
    <Link href={getPath('intranet-news-id-edit', {id: element.id})}><div className='fa fa-pencil button button-green'/></Link>
    <button className='fa fa-trash button button-red' onClick={() => openDeleteNewsModal(element.id)}/>
  </div>
)

const NewsValid = element => {
  const icon = `fa fa-${element.hidden ? 'times' : 'check'}`
  return <span className={icon}/>
}

export default NewsList
