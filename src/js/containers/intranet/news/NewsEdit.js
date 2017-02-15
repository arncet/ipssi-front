import { connect } from 'react-redux'
import {NEWS_EDIT, NEWS_SET_VISIBLE} from '../../../actions'
import {getNews, getNewsEditionStatus, getNewsVisibleStatus} from '../../../selectors/news'
import {getUser} from '../../../selectors/users'

import NewsForm from '../../../components/intranet/news/NewsForm'

const mapStateToProps = (state, {params: {id}}) => {
  const news = getNews(state, id)
  const status = getNewsEditionStatus(state)
  const user = news ? getUser(state, news.userId) : null
  const visibleStatus = getNewsVisibleStatus(state)

  return {news, user, status, visibleStatus}
}

const mapDispatchToProps = dispatch => ({
  editNews: news => dispatch({type: NEWS_EDIT, payload: {news}}),
  setNewsVisible: (newsId, visible) => dispatch({type: NEWS_SET_VISIBLE, payload: {newsId, visible}})
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsForm)
