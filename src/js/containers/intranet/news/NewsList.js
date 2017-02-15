import { connect } from 'react-redux'
import {NEWS_DELETE_OPEN_MODAL, NEWS_DELETE_CLOSE_MODAL, NEWS_DELETE} from '../../../actions'
import {getAllNews, getNews, getNewsStatus, getNewsIdToDelete} from '../../../selectors/news'
import {getUser} from '../../../selectors/users'

import News from '../../../components/intranet/news/News'

const mapStateToProps = state => {
  const allNews = getAllNews(state)
  const isLoading = getNewsStatus(state) === 'pending'
  const newsIdToDelete = getNewsIdToDelete(state)
  const newsToDelete = newsIdToDelete ? getNews(state, newsIdToDelete) : null
  const users = allNews.length ? allNews.reduce((prev, news) => {
    const user = prev[news.userId] ? null : getUser(state, news.userId)
    return user ? {...prev, [user.id]: user} : prev
  }, {}) : {}

  return {
    allNews,
    isLoading,
    newsToDelete,
    users
  }
}

const mapDispatchToProps = dispatch => ({
  deleteNews: () => dispatch({type: NEWS_DELETE}),
  openDeleteNewsModal: newsId => dispatch({type: NEWS_DELETE_OPEN_MODAL, payload: {newsId}}),
  closeDeleteNewsModal: () => dispatch({type: NEWS_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
