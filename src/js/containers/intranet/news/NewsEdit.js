import { connect } from 'react-redux'
import {NEWS_EDIT} from '../../../actions'
import {getNews, getNewsEditionStatus} from '../../../selectors/news'

import NewsForm from '../../../components/intranet/news/NewsForm'

const mapStateToProps = (state, {params: {id}}) => {
  const news = getNews(state, id)
  const status = getNewsEditionStatus(state)

  return {news, status}
}

const mapDispatchToProps = dispatch => ({
  editNews: news => dispatch({type: NEWS_EDIT, payload: {news}})
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsForm)
