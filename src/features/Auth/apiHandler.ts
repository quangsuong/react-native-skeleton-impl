import { useEffect } from 'react'
import { useDispatch, useSelector, Selector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Alert } from 'react-native'

import { Error, ReduxState, Response } from '@src/types/local'
import client from '@src/api/client'
import { STATUS_INTERNAL_SERVER_ERROR, STATUS_UNAUTHORIZED } from '@src/config/constants'

import authSelectors from './auth.selectors'
import authActions from './auth.actions'

export const createApiHandler = (dispatch: any, getState: any) => async <T>(
  apiCall: () => Promise<Response<T>>
): Promise<Response<T>> => {
  const state = getState()
  const authHeader = authSelectors.getAuthHeader(state)
  client.authHeader = authHeader

  try {
    return await apiCall()
  } catch (e) {
    const getErrorMessage = () => {
      if (!e.response?.status) {
        return e.message
      }

      return [e.response.data.message].flat(2).join('\n')
    }

    e.message = getErrorMessage()

    throw e
  }
}

export const errorFilters = {
  exceptCommon: (error: Error) => ![STATUS_UNAUTHORIZED, STATUS_INTERNAL_SERVER_ERROR].includes(error.response?.status),
}

export const useCommonApiErrorsHandler = (errorSelector: Selector<ReduxState, Error>): void => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const error = useSelector(errorSelector)

  useEffect(() => {
    if (!error) {
      return
    }

    switch (error.response?.status) {
      case STATUS_UNAUTHORIZED:
        dispatch(authActions.signOut())
        break

      case STATUS_INTERNAL_SERVER_ERROR:
        Alert.alert(t('error.title'), __DEV__ ? error.response.data : t('error.unexpected'))
        break

      default:
        break
    }
  }, [error, dispatch, t])
}
