import { connect } from 'react-redux'
import {getNews} from '../../../selectors/news'

import NewsForm from '../../../components/intranet/news/NewsForm'

const mapStateToProps = (state, {params: {id}}) => {
  const news = getNews(state, id)

  return {news, inputsDisabled: true}
}

export default connect(mapStateToProps)(NewsForm)
