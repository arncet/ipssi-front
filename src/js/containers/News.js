import {connect} from 'react-redux'
import {getNews} from '../selectors/news'
import {getUser} from '../selectors/users'

import News from '../components/News'

const mapStateToProps = (state, {params: {id}}) => {
  const news = getNews(state, id)
  const user = getUser(state, news.userId)

  return {
    news,
    user
  }
}

export default connect(mapStateToProps)(News)
