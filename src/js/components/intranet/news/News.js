import React from 'react'

//Components
import Header from './Header'
import NewsList from './NewsList'

const News = ({allNews, openDeleteNewsModal, closeDeleteNewsModal, newsToDelete, deleteNews}) => (
  <div className='Intranet_page Intranet_page_News'>
    <Header/>
    <NewsList
      allNews={allNews}
      openDeleteNewsModal={openDeleteNewsModal}
      closeDeleteNewsModal={closeDeleteNewsModal}
      newsToDelete={newsToDelete}
      deleteNews={deleteNews}
    />
  </div>
)

export default News
