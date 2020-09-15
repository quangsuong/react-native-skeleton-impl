import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import createSagaMiddleware from 'redux-saga'

import reducers from './root.reducer'
import rootSaga from './root.saga'

// @ts-ignore
const reduxDevtoolsCompose = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancer = reduxDevtoolsCompose || compose

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, logger]

const store = createStore(reducers, composeEnhancer(applyMiddleware(...middlewares)))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

export { store, persistor }
