import { connect } from 'react-redux'
import {GOOGLE_SEND_EMAIL} from '../../actions'

import CopyBodyStudent from '../../components/intranet/messages/Messages'

const mapStateToProps = () => {

  return {
  }
}

const mapDispatchToProps = dispatch => ({
  sendMessage: () => dispatch({type: GOOGLE_SEND_EMAIL})
})

export default connect(mapStateToProps, mapDispatchToProps)(CopyBodyStudent)
