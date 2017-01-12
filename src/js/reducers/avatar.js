import {AVATAR_OPEN_CONNEXION_MODAL, AVATAR_CLOSE_CONNEXION_MODAL,
 USERS_CONNEXION_SUCCESS} from '../actions'

const initialState = {connexionModalIsOpen: false}

export default function avatar (state = initialState, {type}) {
  switch (type) {
    case AVATAR_OPEN_CONNEXION_MODAL:
      return {
        ...state,
        connexionModalIsOpen: true
      }
    case AVATAR_CLOSE_CONNEXION_MODAL:
    case USERS_CONNEXION_SUCCESS:
      return {
        ...state,
        connexionModalIsOpen: false
      }
    default:
      return state
  }
}
