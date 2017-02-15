import {NEWS_LOAD, NEWS_LOAD_SUCCESS, NEWS_LOAD_FAILED,
 NEWS_CREATE, NEWS_CREATE_SUCCESS, NEWS_CREATE_FAILED,
 NEWS_EDIT, NEWS_EDIT_SUCCESS, NEWS_EDIT_FAILED,
 NEWS_DELETE, NEWS_DELETE_SUCCESS, NEWS_DELETE_FAILED,
 NEWS_CLEAN_STATUS, NEWS_DELETE_OPEN_MODAL, NEWS_DELETE_CLOSE_MODAL,
 NEWS_SET_VISIBLE, NEWS_SET_VISIBLE_SUCCESS, NEWS_SET_VISIBLE_FAILED} from '../actions'

const initialState = {
  isLoading: false,
  creatationStatus: '',
  editionStatus: '',
  deletionStatus: '',
  visibleStatus: '',
  newsIdToDelete: null,
  allNews: {
    1: {
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      header: 'assets/images/home/desktop-mac-2.jpg',
      userId: 1,
      visible: true
    },
    2: {
      id: 2,
      title: 'Lorem ipsum.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      header: 'assets/images/home/b6972e09ad5bf832a831ca2f6200e358.jpg',
      userId: 5,
      visible: true
    },
    3: {
      id: 3,
      title: 'Lorem ipsum jygfhjyhj.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      header: 'assets/images/home/02_b.jpg',
      userId: 5,
      visible: true
    }
  }
}

export default function news (state = initialState, {type, payload}) {
  switch (type) {
    case NEWS_LOAD:
      return {
        ...state,
        status: 'pending'
      }
    case NEWS_LOAD_SUCCESS:
      return {
        ...state,
        allNews: payload.allNews.reduce((prev, news) => {
          return {...prev, [news.id]: news}
        }, {}),
        status: ''
      }
    case NEWS_LOAD_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case NEWS_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case NEWS_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        allNews: {
          ...state.allNews,
          [payload.news.id]: payload.news
        }
      }
    case NEWS_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case NEWS_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case NEWS_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        allNews: {
          ...state.allNews,
          [payload.news.id]: payload.news
        }
      }
    case NEWS_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case NEWS_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case NEWS_DELETE_SUCCESS: {
      const allNews = Object.values(state.allNews).reduce((prev, news) => {
        return news.id === payload.newsId ? prev : {...prev, [news.id]: news}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        allNews,
        newsIdToDelete: null
      }
    }
    case NEWS_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case NEWS_DELETE_OPEN_MODAL:
      return {
        ...state,
        newsIdToDelete: payload.newsId
      }
    case NEWS_DELETE_CLOSE_MODAL:
      return {
        ...state,
        newsIdToDelete: null
      }
    case NEWS_SET_VISIBLE:
      return {
        ...state,
        visibleStatus: 'pending'
      }
    case NEWS_SET_VISIBLE_SUCCESS: {
      return {
        ...state,
        allNews: {
          ...state.allNews,
          [payload.newsId]: {...state.allNews[payload.newsId], hidden: !payload.visible}
        },
        visibleStatus: 'success'
      }
    }
    case NEWS_SET_VISIBLE_FAILED:
      return {
        ...state,
        visibleStatus: 'failed'
      }
    case NEWS_CLEAN_STATUS: {
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
