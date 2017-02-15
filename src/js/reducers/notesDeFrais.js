import {USERS_CONNEXION, USERS_CONNEXION_SUCCESS, USERS_CONNEXION_FAILED,
 USERS_INSCRIPTION, USERS_INSCRIPTION_SUCCESS, USERS_INSCRIPTION_FAILED,
 USERS_FETCH_USERS, USERS_FETCH_USERS_SUCCESS, USERS_FETCH_USERS_FAILED,
 USERS_CLEAR_CONNEXION_STATUS, AVATAR_CLOSE_CONNEXION_MODAL,
 USERS_CREATE, USERS_CREATE_SUCCESS, USERS_CREATE_FAILED,
 USERS_EDIT, USERS_EDIT_SUCCESS, USERS_EDIT_FAILED,
 USERS_DELETE, USERS_DELETE_SUCCESS, USERS_DELETE_FAILED,
 USERS_DELETE_OPEN_MODAL, USERS_DELETE_CLOSE_MODAL,
 USERS_SAVE_PROFILE, USERS_SAVE_PROFILE_SUCCESS, USERS_SAVE_PROFILE_FAILED,
 USERS_DELETE_ACCOUNT, USERS_DELETE_ACCOUNT_SUCCESS, USERS_DELETE_ACCOUNT_FAILED} from '../actions'

import {ROLE_ADMIN, ROLE_STANDARD} from '../utils/roles'

const initialState = {
  users: {
    1: {
      id: 1,
      firstName: 'Arnaud',
      lastName: 'CETOUTE',
      email: 'lol.cetoute@hotmail.fr',
      role: ROLE_ADMIN,
      inscriptionDate: 1486593480676,
      avatar: ''
    },
    2: {
      id: 2,
      firstName: 'Test',
      lastName: 'CETOUTE',
      email: 'arnaud.lol@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: ''
    },
    3: {
      id: 3,
      firstName: 'Arnaud',
      lastName: 'Test',
      email: 'lol.lol@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: ''
    },
    4: {
      id: 4,
      firstName: 'lol',
      lastName: 'lol',
      email: 'test.cetoute@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: ''
    },
    5: {
      id: 5,
      firstName: 'YOLO',
      lastName: 'SWAG',
      email: 'arnaud.test@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: ''
    }
  },
  connexionStatus: '',
  connexionError: '',
  inscriptionStatus: '',
  inscriptionError: '',
  fetchUsersStatus: '',
  creatationStatus: '',
  editionStatus: '',
  deletionStatus: '',
  profileEditionStatus: '',
  accoundDeletionStatus: '',
  status: '',
  userIdToDelete: null,
  me: 1
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
    case USERS_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case USERS_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        users: {
          ...state.users,
          [payload.user.id]: payload.user
        }
      }
    case USERS_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case USERS_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case USERS_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        users: {
          ...state.users,
          [payload.user.id]: payload.user
        }
      }
    case USERS_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case USERS_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case USERS_DELETE_SUCCESS: {
      const users = Object.values(state.users).reduce((prev, user) => {
        return user.id === payload.userId ? prev : {...prev, [user.id]: user}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        users,
        userIdToDelete: null
      }
    }
    case USERS_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case USERS_DELETE_OPEN_MODAL:
      return {
        ...state,
        userIdToDelete: payload.userId
      }
    case USERS_DELETE_CLOSE_MODAL:
      return {
        ...state,
        userIdToDelete: null
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
    case USERS_SAVE_PROFILE:
      return {
        ...state,
        profileEditionStatus: 'pending'
      }
    case USERS_SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        profileEditionStatus: 'success',
        users: {
          ...state.users,
          [payload.user.id]: payload.user
        }
      }
    case USERS_SAVE_PROFILE_FAILED:
      return {
        ...state,
        profileEditionStatus: 'failed'
      }
    case USERS_DELETE_ACCOUNT:
      return {
        ...state,
        accoundDeletionStatus: 'pending'
      }
    case USERS_DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accoundDeletionStatus: 'success',
        me: null
      }
    case USERS_DELETE_ACCOUNT_FAILED:
      return {
        ...state,
        accoundDeletionStatus: 'failed'
      }
    default:
      return state
  }
}
