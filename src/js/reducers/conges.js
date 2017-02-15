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
      fonction: 'Dev. front',
      interventionLocation: 'Lyon, Lelivrescolaire.fr',
      responsable: 'Lance Mitchell',
      congesStartDate: new Date(1484067983302).toISOString(),
      congesEndDate: new Date(1484067983302).toISOString(),
      congesTotalDays: 4,
      congesType: 'Vacances',
      createdAt: new Date(1484067983302).toISOString(),
      location: 'Lyon',
      signature: 'signature',
      validationStatus: 'pending',
      responsableSignatureAndDate: 'Lance Mitchell, 10 janvier 2017',
      dirigentSignatureAndDate: 'Susie  Burgess',
      rejectedComment: '',
      userId: 2
    },
    2: {
      id: 2,
      fonction: 'Dev. front',
      interventionLocation: 'Lyon, Lelivrescolaire.fr',
      responsable: 'Alyssa  Washington',
      congesStartDate: new Date(1484067983302).toISOString(),
      congesEndDate: new Date(1484067983302).toISOString(),
      congesTotalDays: 4,
      congesType: 'Vacances',
      createdAt: new Date(1484067983302).toISOString(),
      location: 'Lyon',
      signature: 'signature',
      validationStatus: 'reject',
      responsableSignatureAndDate: 'Alyssa  Washington, 10 janvier 2017',
      dirigentSignatureAndDate: 'Virginia Vargas',
      rejectedComment: 'Nope nope nope nope',
      userId: 2
    },
    3: {
      id: 3,
      fonction: 'Dev. front',
      interventionLocation: 'Lyon, Lelivrescolaire.fr',
      responsable: 'Santos  Abbott',
      congesStartDate: new Date(1484067983302).toISOString(),
      congesEndDate: new Date(1484067983302).toISOString(),
      congesTotalDays: 4,
      congesType: 'Vacances',
      createdAt: new Date(1484067983302).toISOString(),
      location: 'Lyon',
      signature: 'signature',
      validationStatus: 'valid',
      responsableSignatureAndDate: 'Santos  Abbott, 10 janvier 2017',
      dirigentSignatureAndDate: 'Carole James',
      rejectedComment: '',
      userId: 5
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
        validStatus: 'success',
        conges: {
          ...state.conges,
          [payload.congesId]: {
            ...state.conges[payload.congesId],
            validationStatus: payload.valid ? 'valid' : 'reject',
            rejectedComment: payload.comment ? payload.comment : ''
          }
        }
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
