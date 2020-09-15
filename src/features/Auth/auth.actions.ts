import rootActions from '../../redux/root.actions'

const types = {
  SET_AUTH_INFO: 'auth-feature.set-auth-info',
}

const setAuthInfo = (authInfo: { authToken: string; tokenType: string }) => ({
  type: types.SET_AUTH_INFO,
  payload: authInfo,
})

const signOut = rootActions.resetState

const authFeatureActions = {
  types,
  setAuthInfo,
  signOut,
}

export default authFeatureActions
