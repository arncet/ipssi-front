import {CV_LOAD, CV_LOAD_SUCCESS, CV_LOAD_FAILED,
 CV_CREATE, CV_CREATE_SUCCESS, CV_CREATE_FAILED,
 CV_EDIT, CV_EDIT_SUCCESS, CV_EDIT_FAILED,
 CV_DELETE, CV_DELETE_SUCCESS, CV_DELETE_FAILED,
 CV_VALID, CV_VALID_SUCCESS, CV_VALID_FAILED,
 CV_CLEAN_STATUS, CV_DELETE_OPEN_MODAL, CV_DELETE_CLOSE_MODAL} from '../actions'

const initialState = {
  isLoading: false,
  creatationStatus: '',
  editionStatus: '',
  deletionStatus: '',
  cvIdToDelete: null,
  validStatus: '',
  askForEditionStatus: '',
  status: '',
  cvs: {
    1: {
      id: 1,
      title: 'Graphiste',
      address: 'Rue des avenues de l\'impasse, Lyon 69009',
      experiences: {
        1: {
          id: 1,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'Ici',
          name: 'lol',
          description: 'lol'
        },
        2: {
          id: 2,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'LOLOLOL',
          name: 'unicorn',
          description: 'yolo'
        },
        3: {
          id: 3,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'yuhujk',
          name: 'Lorem',
          description: 'sdihfjliuejf uhku fnejhfkuj'
        }
      },
      formations: {},
      skills: {},
      moreInfos: '',
      userId: 2,
      validationStatus: 'reject',
      askForEditionComment: 'Demande de modification :)'
    },
    2: {
      id: 2,
      title: 'Dev. back',
      address: 'Rue des avenues de l\'impasse, Lyon 69009',
      experiences: {
        1: {
          id: 1,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'Ici',
          name: 'lol',
          description: 'lol'
        },
        2: {
          id: 2,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'LOLOLOL',
          name: 'unicorn',
          description: 'yolo'
        },
        3: {
          id: 3,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'yuhujk',
          name: 'Lorem',
          description: 'sdihfjliuejf uhku fnejhfkuj'
        }
      },
      formations: {
        1: {
          id: 1,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'Ici',
          name: 'lol',
          description: 'lol'
        },
        2: {
          id: 2,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'LOLOLOL',
          name: 'unicorn',
          description: 'yolo'
        },
        3: {
          id: 3,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'yuhujk',
          name: 'Lorem',
          description: 'sdihfjliuejf uhku fnejhfkuj'
        }
      },
      skills: {},
      moreInfos: '',
      userId: 1,
      validationStatus: 'pending',
      askForEditionComment: 'Demande de modification :)'
    },
    3: {
      id: 3,
      title: 'Dev. front',
      address: 'Rue des avenues de l\'impasse, Lyon 69009',
      experiences: {
        1: {
          id: 1,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'Ici',
          name: 'lol',
          description: 'lol'
        },
        2: {
          id: 2,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'LOLOLOL',
          name: 'unicorn',
          description: 'yolo'
        },
        3: {
          id: 3,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'yuhujk',
          name: 'Lorem',
          description: 'sdihfjliuejf uhku fnejhfkuj'
        }
      },
      formations: {
        1: {
          id: 1,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'Ici',
          name: 'lol',
          description: 'lol'
        },
        2: {
          id: 2,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'LOLOLOL',
          name: 'unicorn',
          description: 'yolo'
        },
        3: {
          id: 3,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          location: 'yuhujk',
          name: 'Lorem',
          description: 'sdihfjliuejf uhku fnejhfkuj'
        }
      },
      skills: {
        3: {
          id: 3,
          title: 'C++',
          level: 'Expert'
        },
        2: {
          id: 2,
          title: 'Python',
          level: 'Debutant'
        },
        1: {
          id: 1,
          title: 'Java',
          level: 'Expert'
        }
      },
      moreInfos: '',
      userId: 4,
      validationStatus: 'valid'
    }
  }
}

export default function cv (state = initialState, {type, payload}) {
  switch (type) {
    case CV_LOAD:
      return {
        ...state,
        status: 'pending'
      }
    case CV_LOAD_SUCCESS:
      return {
        ...state,
        cvs: payload.cvs.reduce((prev, cv) => {
          return {...prev, [cv.id]: cv}
        }, {}),
        status: ''
      }
    case CV_LOAD_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case CV_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case CV_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        cvs: {
          ...state.cvs,
          [payload.cv.id]: payload.cv
        }
      }
    case CV_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case CV_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case CV_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        cvs: {
          ...state.cvs,
          [payload.cv.id]: payload.cv
        }
      }
    case CV_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case CV_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case CV_DELETE_SUCCESS: {
      const cvs = Object.values(state.cvs).reduce((prev, cv) => {
        return cv.id === payload.cvId ? prev : {...prev, [cv.id]: cv}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        cvs,
        cvIdToDelete: null
      }
    }
    case CV_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case CV_DELETE_OPEN_MODAL:
      return {
        ...state,
        cvIdToDelete: payload.cvId
      }
    case CV_DELETE_CLOSE_MODAL:
      return {
        ...state,
        cvIdToDelete: null
      }
    case CV_VALID:
      return {
        ...state,
        validStatus: 'pending'
      }
    case CV_VALID_SUCCESS:
      return {
        ...state,
        validStatus: 'success'
      }
    case CV_VALID_FAILED:
      return {
        ...state,
        validStatus: 'failed'
      }
    case CV_CLEAN_STATUS: {
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
