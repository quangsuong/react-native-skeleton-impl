// istanbul ignore file
/**
 * @flow
 */

import type { ErrorNotifier } from '../../types/local'

const nullNotifier: ErrorNotifier = {
  notify(error: any, errorInfo: any) {
    return null
  },
  init() {
    return null
  },
}

export default nullNotifier
