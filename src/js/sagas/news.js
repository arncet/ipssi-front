import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {NEWS_CREATE, NEWS_CREATE_SUCCESS, NEWS_CREATE_FAILED,
 NEWS_EDIT, NEWS_EDIT_SUCCESS, NEWS_EDIT_FAILED,
 NEWS_DELETE, NEWS_DELETE_SUCCESS, NEWS_DELETE_FAILED,
 NEWS_SET_VISIBLE, NEWS_SET_VISIBLE_SUCCESS, NEWS_SET_VISIBLE_FAILED,
 NOTIFICATION_ADD} from '../actions'
import {createNewsApi, editNewsApi, deleteNewsApi, setNewsVisibleApi} from '../api/news'
import {getNewsIdToDelete} from '../selectors/news'
import {getMe} from '../selectors/users'
import {getPath} from '../utils/routes'
import {getRandomString} from '../utils/string'

//Create
function* createNews ({payload: {news}}) {
  try {
    const state = yield select()
    const me = getMe(state)
    const createdNews = yield call(createNewsApi, news, me.id)
    yield put({type: NEWS_CREATE_SUCCESS, payload: {news: createdNews}})
    window.location.href = `#/${getPath('intranet-news-id', {id: createdNews.id})}` //Use history
  } catch(e) {
    yield put({type: NEWS_CREATE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR CREATE NEWS', e)
  }
}

function* watchCreateNews () {
  yield* takeEvery(NEWS_CREATE, createNews)
}

//Edit
function* editNews ({payload: {news}}) {
  try {
    const editedNews = yield call(editNewsApi, news)
    yield put({type: NEWS_EDIT_SUCCESS, payload: {news: editedNews}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de l'actualité a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: NEWS_EDIT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR EDIT NEWS', e)
  }
}

function* watchEditNews () {
  yield* takeEvery(NEWS_EDIT, editNews)
}

//Delete
function* deleteNews () {
  try {
    const state = yield select()
    const newsId = getNewsIdToDelete(state)
    yield call(deleteNewsApi, newsId)
    yield put({type: NEWS_DELETE_SUCCESS, payload: {newsId}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `L'actualité a bien été surrpimée.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: NEWS_DELETE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR DELETE NEWS', e)
  }
}

function* watchDeleteNews () {
  yield* takeEvery(NEWS_DELETE, deleteNews)
}

//Visible
function* setNewsVisible ({payload: {newsId, visible}}) {
  try {
    yield call(setNewsVisibleApi, newsId, visible)
    yield put({type: NEWS_SET_VISIBLE_SUCCESS, payload: {newsId, visible}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La visibilité de l'actualité a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: NEWS_SET_VISIBLE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR VISIBLE NEWS', e)
  }
}

function* watchSetNewsVisible () {
  yield* takeEvery(NEWS_SET_VISIBLE, setNewsVisible)
}


function* flow () {
  yield [
    watchCreateNews(),
    watchEditNews(),
    watchDeleteNews(),
    watchSetNewsVisible()
  ]
}

export default flow
