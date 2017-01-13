import {CONGES_LOAD, CONGES_LOAD_SUCCESS, CONGES_LOAD_FAILED,
 CONGES_CREATE, CONGES_CREATE_SUCCESS, CONGES_CREATE_FAILED,
 CONGES_EDIT, CONGES_EDIT_SUCCESS, CONGES_EDIT_FAILED,
 CONGES_DELETE, CONGES_DELETE_SUCCESS, CONGES_DELETE_FAILED,
 CONGES_VALID, CONGES_VALID_SUCCESS, CONGES_VALID_FAILED,
 CONGES_CLEAN_STATUS, CONGES_DELETE_OPEN_MODAL, CONGES_DELETE_CLOSE_MODAL} from '../actions'

const initialState = {
  isLoading: false,
  creatationStatus: '',
  editionStatus: '',
  deletionStatus: '',
  congesIdToDelete: null,
  validStatus: '',
  conges: {
    1: {
      id: 1,
      firstName: 'Arnaud',
      lastName: 'CETOUTE',
      fonction: 'Dev. front',
      interventionLocation: 'Lyon, Lelivrescolaire.fr',
      responsable: 'J. BANON',
      congesStartDate: 1484067983302,
      congesEndDate: 1484067983302,
      congesTotalDays: 4,
      congesType: ':)',
      createdAt: 1484067983302,
      location: 'Lyon',
      signature: 'A. CETOUTE',
      validationStatus: 'pending',
      responsableSignatureAndDate: 'J. BANON, 10 janvier 2017',
      dirigentSignatureAndDate: 'R. TAIEB',
      rejectedComment: '',
      author: 'Arnaud CETOUTE'
    },
    2: {
      id: 2,
      firstName: 'ArnCet',
      lastName: 'CETOUTE',
      fonction: 'Dev. front',
      interventionLocation: 'Lyon, Lelivrescolaire.fr',
      responsable: 'J. BANON',
      congesStartDate: 1484067983302,
      congesEndDate: 1484067983302,
      congesTotalDays: 4,
      congesType: ':)',
      createdAt: 1484067983302,
      location: 'Lyon',
      signature: 'A. CETOUTE',
      validationStatus: 'reject',
      responsableSignatureAndDate: 'J. BANON, 10 janvier 2017',
      dirigentSignatureAndDate: 'R. TAIEB',
      rejectedComment: 'Nope nope nope nope',
      author: 'Arnaud CETOUTE'
    },
    3: {
      id: 3,
      firstName: 'Moi',
      lastName: 'CETOUTE',
      fonction: 'Dev. front',
      interventionLocation: 'Lyon, Lelivrescolaire.fr',
      responsable: 'J. BANON',
      congesStartDate: 1484067983302,
      congesEndDate: 1484067983302,
      congesTotalDays: 4,
      congesType: ':)',
      createdAt: 1484067983302,
      location: 'Lyon',
      signature: 'A. CETOUTE',
      validationStatus: 'valid',
      responsableSignatureAndDate: 'J. BANON, 10 janvier 2017',
      dirigentSignatureAndDate: 'R. TAIEB',
      rejectedComment: '',
      author: 'Arnaud CETOUTE'
    }
  }
}

export default function conges (state = initialState, {type, payload}) {
  switch (type) {
    case CONGES_LOAD:
      return {
        ...state,
        status: 'pending'
      }
    case CONGES_LOAD_SUCCESS:
      return {
        ...state,
        conges: payload.conges.reduce((prev, conges) => {
          return {...prev, [conges.id]: conges}
        }, {}),
        status: ''
      }
    case CONGES_LOAD_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case CONGES_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case CONGES_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        conges: {
          ...state.conges,
          [payload.conges.id]: payload.conges
        }
      }
    case CONGES_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case CONGES_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case CONGES_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        conges: {
          ...state.conges,
          [payload.conges.id]: payload.conges
        }
      }
    case CONGES_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case CONGES_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case CONGES_DELETE_SUCCESS: {
      const conges = Object.values(state.conges).reduce((prev, conges) => {
        return conges.id === payload.congesId ? prev : {...prev, [conges.id]: conges}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        conges,
        congesIdToDelete: null
      }
    }
    case CONGES_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case CONGES_DELETE_OPEN_MODAL:
      return {
        ...state,
        congesIdToDelete: payload.congesId
      }
    case CONGES_DELETE_CLOSE_MODAL:
      return {
        ...state,
        congesIdToDelete: null
      }
    case CONGES_CLEAN_STATUS: {
      return {
        ...state,
        creatationStatus: '',
        editionStatus: '',
        deletionStatus: ''
      }
    }
    case CONGES_VALID:
      return {
        ...state,
        validStatus: 'pending'
      }
    case CONGES_VALID_SUCCESS:
      return {
        ...state,
        validStatus: 'success'
      }
    case CONGES_VALID_FAILED:
      return {
        ...state,
        validStatus: 'failed'
      }
    default:
      return state
  }
}
