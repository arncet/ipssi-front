import { connect } from 'react-redux'
import {NEWS_CREATE} from '../../../actions'
import {getNewsCreationStatus} from '../../../selectors/news'

import NewsForm from '../../../components/intranet/news/NewsForm'

const mapStateToProps = state => {
  const status = getNewsCreationStatus(state)

  return {status}
}

const mapDispatchToProps = dispatch => ({
  createNews: news => dispatch({type: NEWS_CREATE, payload: {news}})
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsForm)
