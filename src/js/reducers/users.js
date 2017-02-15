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

import {ROLE_ADMIN, ROLE_STANDARD, ROLE_COLLABORATOR} from '../utils/roles'

const initialState = {
  users: {
    1: {
      id: 1,
      firstName: 'Arnaud',
      lastName: 'CETOUTE',
      email: 'arnaud.cetoute@hotmail.fr',
      role: ROLE_ADMIN,
      inscriptionDate: 1486593480676,
      avatar: 'http://cdn1-elle.ladmedia.fr/var/plain_site/storage/images/beaute/cheveux/coiffure/30-coupes-de-cheveux-pour-hommes-qui-nous-seduisent-sur-pinterest/coiffure-homme-cheveux-court-automne-hiver-2016/51183690-1-fre-FR/Coiffure-homme-cheveux-court-automne-hiver-2016.jpg'
    },
    2: {
      id: 2,
      firstName: 'Fred',
      lastName: 'Powell',
      email: 'fred.powell@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: 'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png',
    },
    3: {
      id: 3,
      firstName: 'Everett',
      lastName: 'Delgado',
      email: 'everett.delgado@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: 'https://d34jodf30bmh8b.cloudfront.net/pictures/5662/5805/profile-1474296140-74b387029a8608afda33cedaca711f23.jpg'
    },
    4: {
      id: 4,
      firstName: 'Chris',
      lastName: 'Miles',
      email: 'chris.miles@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: 'https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg'
    },
    5: {
      id: 5,
      firstName: 'Meredith',
      lastName: 'Arnold',
      email: 'meredith.arnold@hotmail.fr',
      role: ROLE_STANDARD,
      inscriptionDate: 1486593480676,
      avatar: 'http://bondibeauty.com.au/wp-content/uploads/2015/02/enlarged-facebook-profile-picture.jpg'
    },
    6: {
      id: 6,
      firstName: 'Irma',
      lastName: 'Nguyen',
      email: 'irma.nguyen@hotmail.fr',
      role: ROLE_COLLABORATOR,
      inscriptionDate: 1486593480676,
      avatar: 'http://www.carascravings.com/wp-content/uploads/2012/07/profile-photo.jpg'
    },
    7: {
      id: 7,
      firstName: 'Brittany',
      lastName: 'Pratt',
      email: 'brittany.pratt@hotmail.fr',
      role: ROLE_COLLABORATOR,
      inscriptionDate: 1486593480676,
      avatar: 'http://cdn2-elle.ladmedia.fr/var/plain_site/storage/images/beaute/cheveux/coiffure/modele-coiffure-visage-rond/coupe-visage-rond-carre-plongeant/51589352-1-fre-FR/Coupe-visage-rond-carre-plongeant.jpg'
    },
    8: {
      id: 8,
      firstName: 'Cathy',
      lastName: 'Kelley',
      email: 'cathy.kelley@hotmail.fr',
      role: ROLE_COLLABORATOR,
      inscriptionDate: 1486593480676,
      avatar: 'http://s.plurielles.fr/mmdia/i/49/6/femme-visage-triangulaire-10526496fcexe_2041.jpg?v=1'
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
          [payload.userId]: payload.user
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
