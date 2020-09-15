import { useEffect } from 'react'
import { useSelector, Selector } from 'react-redux'
import { Alert } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Error, ReduxState } from '@src/types/local'

export const filters = {
  always: (error: Error | null) => true,
}

export const useErrorHandler = (errorSelector: Selector<ReduxState, Error | null>, filter = filters.always) => {
  const { t } = useTranslation()

  const error = useSelector(errorSelector)

  useEffect(() => {
    if (error && filter(error)) {
      Alert.alert(t('error.title'), error.message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, filter])
}
