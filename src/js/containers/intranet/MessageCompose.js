import { connect } from 'react-redux'
import {GOOGLE_SEND_EMAIL, GOOGLE_CLOSE_COMPOSE_EMAIL_MODAL} from '../../actions'
import {getComposeEmailModalIsOpen} from '../../selectors/gmail'

import MessageCompose from '../../components/intranet/messages/MessageCompose'

const mapStateToProps = state => {
  const composeModalIsOpen = getComposeEmailModalIsOpen(state)

  return {
    composeModalIsOpen
  }
}

const mapDispatchToProps = dispatch => ({
  closeComposeMessageModal: () => dispatch({type: GOOGLE_CLOSE_COMPOSE_EMAIL_MODAL}),
  sendMessage: (message, obj, emails) => dispatch({type: GOOGLE_SEND_EMAIL, payload: {message, obj, emails}})
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageCompose)
