/**
 * @flow
 */

import { Alert } from 'react-native'
import i18n from 'i18next'
import _ from 'lodash'

interface DeleteConfirmationArgs {
  title: string
  message: string
  okText?: string
  cancelText?: string
  onOk?: () => any
  onCancel?: () => any
}

const deleteConfirmation = ({
  title,
  message,
  okText = i18n.t('common.delete'),
  cancelText = i18n.t('common.cancel'),
  onOk = _.noop,
  onCancel = _.noop,
}: DeleteConfirmationArgs) => {
  return Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        onPress: onCancel,
      },
      {
        text: okText,
        onPress: onOk,
        style: 'destructive',
      },
    ],
    { cancelable: false }
  )
}

export default {
  deleteConfirmation,
}
