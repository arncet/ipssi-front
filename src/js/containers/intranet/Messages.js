import { connect } from 'react-redux'
import {GOOGLE_SEND_EMAIL} from '../../actions'
import {getGmailEmails} from '../../selectors/google'

import Meesages from '../../components/intranet/messages/Messages'

const mapStateToProps = state => {
  const messages = getGmailEmails(state)
  
  return {
    messages
  }
}

const mapDispatchToProps = dispatch => ({
  sendMessage: () => dispatch({type: GOOGLE_SEND_EMAIL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Meesages)
