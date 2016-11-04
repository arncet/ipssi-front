import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import * as reducers from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import { createResponsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive'

export default function configureStore (history) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      ...reducers,
      routing,
      browser: createResponsiveStateReducer({
        mobile: 650,
        phablet: 1090,
        tablet: 1200
      })
    }),
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(sagaMiddleware, createLogger(), routerMiddleware(history))
  ))
  sagaMiddleware.run(sagas)

  return store
}
