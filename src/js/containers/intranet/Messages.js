import { connect } from 'react-redux'
import {GOOGLE_OPEN_COMPOSE_EMAIL_MODAL} from '../../actions'
import {gmailApiIsLoaded, getGmailEmails, getGmailStatus} from '../../selectors/gmail'

import Meesages from '../../components/intranet/messages/Messages'

const mapStateToProps = state => {
  const messages = getGmailEmails(state)
  const isLoading = !gmailApiIsLoaded(state) || getGmailStatus(state) === 'pending'

  return {
    messages,
    isLoading
  }
}

const mapDispatchToProps = dispatch => ({
  openComposeMessageModal: () => dispatch({type: GOOGLE_OPEN_COMPOSE_EMAIL_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Meesages)
