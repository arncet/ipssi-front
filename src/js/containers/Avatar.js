import {connect} from 'react-redux'
import {AVATAR_OPEN_CONNEXION_MODAL, AVATAR_CLOSE_CONNEXION_MODAL, USERS_CONNEXION} from '../actions'
import {getMe, getConnextionStatus} from '../selectors/users'
import {getConnextionModalIsOpen} from '../selectors/avatar'

import Avatar from '../components/Avatar'

const mapStateToProps = (state) => {
  const me = getMe(state)
  const connexionStatus = getConnextionStatus(state)
  const connexionModalIsOpen = getConnextionModalIsOpen(state)

  return {me, connexionStatus, connexionModalIsOpen}
}

const mapDispatchToProps = dispatch => ({
  openConnexionModal: () => dispatch({type: AVATAR_OPEN_CONNEXION_MODAL}),
  closeConnexionModal: () => dispatch({type: AVATAR_CLOSE_CONNEXION_MODAL}),
  connexion: user => dispatch({type: USERS_CONNEXION, payload: {user}}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)
