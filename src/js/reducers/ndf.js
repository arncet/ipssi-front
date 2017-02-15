import {NDF_LOAD, NDF_LOAD_SUCCESS, NDF_LOAD_FAILED,
 NDF_CREATE, NDF_CREATE_SUCCESS, NDF_CREATE_FAILED,
 NDF_EDIT, NDF_EDIT_SUCCESS, NDF_EDIT_FAILED,
 NDF_DELETE, NDF_DELETE_SUCCESS, NDF_DELETE_FAILED,
 NDF_CLEAN_STATUS, NDF_DELETE_OPEN_MODAL, NDF_DELETE_CLOSE_MODAL} from '../actions'

const initialState = {
  isLoading: false,
  creatationStatus: '',
  editionStatus: '',
  deletionStatus: '',
  visibleStatus: '',
  ndfIdToDelete: null,
  ndfs: {
    1: {
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      location: 'Paris',
      price: '120 €',
      userId: 1
    },
    2: {
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      location: 'Lyon',
      price: '520 €',
      userId: 1
    },
    3: {
      id: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      location: 'Marseille',
      price: '150 €',
      userId: 2
    },
    4: {
      id: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      location: 'Paris',
      price: '12 €',
      userId: 4
    },
  }
}

export default function ndf (state = initialState, {type, payload}) {
  switch (type) {
    case NDF_LOAD:
      return {
        ...state,
        status: 'pending'
      }
    case NDF_LOAD_SUCCESS:
      return {
        ...state,
        ndfs: payload.ndfs.reduce((prev, ndf) => {
          return {...prev, [ndf.id]: ndf}
        }, {}),
        status: ''
      }
    case NDF_LOAD_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case NDF_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case NDF_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        ndfs: {
          ...state.ndfs,
          [payload.ndf.id]: payload.ndf
        }
      }
    case NDF_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case NDF_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case NDF_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        ndfs: {
          ...state.ndfs,
          [payload.ndf.id]: payload.ndf
        }
      }
    case NDF_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case NDF_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case NDF_DELETE_SUCCESS: {
      const ndfs = Object.values(state.ndfs).reduce((prev, ndf) => {
        return ndf.id === payload.ndfId ? prev : {...prev, [ndf.id]: ndf}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        ndfs,
        ndfIdToDelete: null
      }
    }
    case NDF_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case NDF_DELETE_OPEN_MODAL:
      return {
        ...state,
        ndfIdToDelete: payload.ndfId
      }
    case NDF_DELETE_CLOSE_MODAL:
      return {
        ...state,
        ndfIdToDelete: null
      }
    case NDF_CLEAN_STATUS: {
      return {
        ...state,
        creatationStatus: '',
        editionStatus: '',
        deletionStatus: ''
      }
    }
    default:
      return state
  }
}
