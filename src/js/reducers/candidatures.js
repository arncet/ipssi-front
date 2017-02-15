import {CANDIDATURES_FETCH_CANDIDATURES, CANDIDATURES_FETCH_CANDIDATURES_SUCCESS, CANDIDATURES_FETCH_CANDIDATURES_FAILED,
 CANDIDATURES_LOAD, CANDIDATURES_LOAD_SUCCESS, CANDIDATURES_LOAD_FAILED,
 CANDIDATURES_CREATE, CANDIDATURES_CREATE_SUCCESS, CANDIDATURES_CREATE_FAILED,
 CANDIDATURES_EDIT, CANDIDATURES_EDIT_SUCCESS, CANDIDATURES_EDIT_FAILED,
 CANDIDATURES_DELETE, CANDIDATURES_DELETE_SUCCESS, CANDIDATURES_DELETE_FAILED,
 CANDIDATURES_SET_VALID, CANDIDATURES_SET_VALID_SUCCESS, CANDIDATURES_SET_VALID_FAILED,
 CANDIDATURES_CLEAN_STATUS, CANDIDATURES_DELETE_OPEN_MODAL, CANDIDATURES_DELETE_CLOSE_MODAL} from '../actions'

const initialState = {
  candidatures: {
    1: {
      id: 1,
      jobId: 2,
      date: 1472215201483,
      validStatus: 'valid',
      userId: 3,
      cvId: 1
    },
    2: {
      id: 2,
      jobId: 1,
      date: 1472215201483,
      validStatus: 'reject',
      userId: 4,
      cvId: 1
    },
    3: {
      id: 3,
      jobId: 3,
      date: 1472215201483,
      validStatus: 'pending',
      userId: 3,
      cvId: 2
    },
    4: {
      id: 4,
      jobId: 1,
      date: 1472215201483,
      validStatus: 'reject',
      userId: 3,
      cvId: 3
    },
    5: {
      id: 5,
      jobId: 2,
      date: 1472215201483,
      validStatus: 'pending',
      userId: 2,
      cvId: 2
    },
    6: {
      id: 6,
      jobId: 1,
      date: 1472215201483,
      validStatus: 'pending',
      userId: 1,
      cvId: 2
    }
  },
  candidaturesStatus: '',
  candidatureValidStatus: '',
  creationStatus: '',
  editionStatus: '',
  candidatureIdToDelete: null
}

export default function candidatures (state = initialState, {type, payload}) {
  switch (type) {
    case CANDIDATURES_FETCH_CANDIDATURES:
      return {
        ...state,
        candidaturesStatus: 'pending'
      }
    case CANDIDATURES_FETCH_CANDIDATURES_SUCCESS:
      return {
        ...state,
        candidatures: payload.candidatures.reduce((prev, candidature) => {
          return {...prev, [candidature.id]: candidature}
        }, {}),
        candidaturesStatus: ''
      }
    case CANDIDATURES_FETCH_CANDIDATURES_FAILED:
      return {
        ...state,
        candidaturesStatus: 'failed'
      }
    case CANDIDATURES_LOAD:
      return {
        ...state,
        status: 'pending'
      }
    case CANDIDATURES_LOAD_SUCCESS:
      return {
        ...state,
        candidatures: payload.candidatures.reduce((prev, candidature) => {
          return {...prev, [candidature.id]: candidature}
        }, {}),
        status: ''
      }
    case CANDIDATURES_LOAD_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case CANDIDATURES_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case CANDIDATURES_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        candidatures: {
          ...state.candidatures,
          [payload.candidature.id]: payload.candidature
        }
      }
    case CANDIDATURES_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case CANDIDATURES_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case CANDIDATURES_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        candidatures: {
          ...state.candidatures,
          [payload.candidature.id]: payload.candidature
        }
      }
    case CANDIDATURES_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case CANDIDATURES_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case CANDIDATURES_DELETE_SUCCESS: {
      const candidatures = Object.values(state.candidatures).reduce((prev, candidature) => {
        return candidature.id === payload.candidatureId ? prev : {...prev, [candidature.id]: candidature}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        candidatures,
        candidatureIdToDelete: null
      }
    }
    case CANDIDATURES_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case CANDIDATURES_DELETE_OPEN_MODAL:
      return {
        ...state,
        candidatureIdToDelete: payload.candidatureId
      }
    case CANDIDATURES_DELETE_CLOSE_MODAL:
      return {
        ...state,
        candidatureIdToDelete: null
      }
    case CANDIDATURES_SET_VALID:
      return {
        ...state,
        candidatureValidStatus: 'pending'
      }
    case CANDIDATURES_SET_VALID_SUCCESS: {
      return {
        ...state,
        candidatures: {
          ...state.candidatures,
          [payload.candidatureId]: {...state.candidatures[payload.candidatureId], validStatus: payload.valid ? 'valid' : 'reject'}
        },
        candidatureValidStatus: 'success'
      }
    }
    case CANDIDATURES_SET_VALID_FAILED:
      return {
        ...state,
        candidatureValidStatus: 'failed'
      }
    case CANDIDATURES_CLEAN_STATUS: {
      return {
        ...state,
        creatationStatus: '',
        editionStatus: '',
        deletionStatus: '',
        validStatus: ''
      }
    }
    default:
      return state
  }
}
