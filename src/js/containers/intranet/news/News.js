import { connect } from 'react-redux'
import {getNews} from '../../../selectors/news'
import {getUser} from '../../../selectors/users'

import NewsForm from '../../../components/intranet/news/NewsForm'

const mapStateToProps = (state, {params: {id}}) => {
  const news = getNews(state, id)
  const user = news ? getUser(state, news.userId) : null

  return {news, user, inputsDisabled: true}
}

export default connect(mapStateToProps)(NewsForm)
