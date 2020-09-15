/**
 * @flow
 */

import { Platform } from 'react-native'

import env from '../config/env'

export const assetsUrl = (path: string | null, host: string = env.ASSETS_BASE_URL) => {
  if (!path) {
    return null
  }

  if (path.startsWith('/')) {
    return [host, path].join('')
  }

  return [host, path].join('/')
}

/**
 * https://github.com/facebook/react-native/issues/29021#issuecomment-685267961
 */
export const localFileUri = (uri: null | string) => {
  if (!uri) {
    return null
  }

  if (Platform.OS === 'android') {
    return uri
  }

  return uri.replace('file://', '/private')
}
