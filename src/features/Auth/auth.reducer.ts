/**
 * @flow
 */

import produce from 'immer'

import actions from './auth.actions'

export interface State {
  authToken: string
  tokenType: string
  isAuthenticated: boolean
}

const initialState: State = {
  authToken: '',
  tokenType: '',
  isAuthenticated: false,
}

/* eslint-disable no-param-reassign */
const authFeatureReducer = produce<any, any>((state: State, action: any) => {
  switch (action.type) {
    case actions.types.SET_AUTH_INFO:
      state.authToken = action.payload.authToken
      state.tokenType = action.payload.tokenType
      state.isAuthenticated = true
      break

    // no default
  }
}, initialState)

export default authFeatureReducer
