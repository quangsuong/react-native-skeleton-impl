import { createSelector } from 'reselect'

import type { ReduxState } from '../../types/local'

import type { State } from './auth.reducer'

const getState = (state: ReduxState) => state.userData.authFeature

const getIsAuthenticated = createSelector<any, any, any>(getState, (state: State): boolean => state.isAuthenticated)

const getAuthHeader = createSelector<any, any, any>(getState, (state: State): string =>
  [state.tokenType, state.authToken].filter(Boolean).join(' ')
)

const authFeatureSelectors = {
  getIsAuthenticated,
  getAuthHeader,
}

export default authFeatureSelectors
