import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {NEWS_CREATE, NEWS_CREATE_SUCCESS, NEWS_CREATE_FAILED,
 NEWS_EDIT, NEWS_EDIT_SUCCESS, NEWS_EDIT_FAILED,
 NEWS_DELETE, NEWS_DELETE_SUCCESS, NEWS_DELETE_FAILED} from '../actions'
import {createNewsApi, editNewsApi, deleteNewsApi} from '../api/news'
import {getNewsIdToDelete} from '../selectors/news'
import {getPath} from '../utils/routes'

//Create
function* createNews ({payload: {news}}) {
  try {
    const createdNews = yield call(createNewsApi, news)
    yield put({type: NEWS_CREATE_SUCCESS, payload: {news: createdNews}})
    window.location.href = getPath('intranet-news-id', {id: createNews.id}) //Use history
  } catch(e) {
    yield put({type: NEWS_CREATE_FAILED})
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
  } catch(e) {
    yield put({type: NEWS_EDIT_FAILED})
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
  } catch(e) {
    yield put({type: NEWS_DELETE_FAILED})
    console.error('ERROR DELETE NEWS', e)
  }
}

function* watchDeleteNews () {
  yield* takeEvery(NEWS_DELETE, deleteNews)
}

function* flow () {
  yield [
    watchCreateNews(),
    watchEditNews(),
    watchDeleteNews()
  ]
}

export default flow
