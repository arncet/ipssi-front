import {USERS_CONNEXION, USERS_CONNEXION_SUCCESS, USERS_CONNEXION_FAILED,
 USERS_INSCRIPTION, USERS_INSCRIPTION_SUCCESS, USERS_INSCRIPTION_FAILED,
 USERS_FETCH_USERS, USERS_FETCH_USERS_SUCCESS, USERS_FETCH_USERS_FAILED,
 USERS_CLEAR_CONNEXION_STATUS, AVATAR_CLOSE_CONNEXION_MODAL} from '../actions'

const initialState = {
  users: {

  },
  connexionStatus: '',
  connexionError: '',
  inscriptionStatus: '',
  inscriptionError: '',
  fetchUsersStatus: '',
  me: null
}

export default function users (state = initialState, {type, payload}) {
  switch (type) {
    case USERS_FETCH_USERS:
      return {
        ...state,
        fetchUsersStatus: 'pending'
      }
    case USERS_FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: payload.users.reduce((prev, user) => {
          return {...prev, [user.id]: user}
        }, {}),
        fetchUsersStatus: ''
      }
    case USERS_FETCH_USERS_FAILED:
      return {
        ...state,
        fetchUsersStatus: 'failed'
      }
    case USERS_CONNEXION:
      return {
        ...state,
        connexionStatus: 'pending'
      }
    case USERS_CONNEXION_SUCCESS:
      return {
        ...state,
        // me: payload.user.id,
        // users: {
        //   ...state.users,
        //   [payload.user.id]: payload.user
        // },
        connexionStatus: 'success'
      }
    case USERS_CONNEXION_FAILED:
      return {
        ...state,
        connexionStatus: 'failed',
        connexionError: payload && payload.connexionError ? payload.connexionError : ''
      }
    case USERS_INSCRIPTION:
      return {
        ...state,
        inscriptionStatus: 'pending'
      }
    case USERS_INSCRIPTION_SUCCESS:
      return {
        ...state,
        inscriptionStatus: 'success'
      }
    case USERS_INSCRIPTION_FAILED:
      return {
        ...state,
        inscriptionStatus: 'failed',
        inscriptionError: payload.inscriptionError || ''
      }
    case AVATAR_CLOSE_CONNEXION_MODAL:
    case USERS_CLEAR_CONNEXION_STATUS:
      return {
        ...state,
        connexionStatus: ''
      }
    default:
      return state
  }
}
