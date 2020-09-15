import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers } from 'redux'
import { persistReducer, PersistConfig } from 'redux-persist'

import authFeatureReducer from '@src/features/Auth/auth.reducer'

import rootActions from './root.actions'

const storage = AsyncStorage

const persistKeys = {
  root: 'root',
  auth: 'auth',
}

const authPersistConfig: PersistConfig<any> = {
  key: persistKeys.auth,
  storage,
  blacklist: [],
}

const userDataReducer = combineReducers({
  // domain
  // features
  authFeature: persistReducer(authPersistConfig, authFeatureReducer),
  // screens
})

const globalDataReducer = (state = {}) => {
  return state
}

const appReducer = combineReducers({
  globalData: globalDataReducer,
  userData: userDataReducer,
})

export function rootReducer(state: any, action: any) {
  switch (action.type) {
    case rootActions.types.RESET_STATE: {
      Object.values(persistKeys).forEach((persistKey) => {
        // $FlowExpectedError
        storage.removeItem(`persist:${persistKey}`).catch(() => {})
      })
      return appReducer(undefined, action)
    }
    default: {
      return appReducer(state, action)
    }
  }
}

const persistConfig: PersistConfig<any> = {
  key: persistKeys.root,
  storage,
  whitelist: [],
}

export default persistReducer(persistConfig, rootReducer)
