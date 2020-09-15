/**
 * @flow
 */

import { ApiActionSet } from '@src/types/local'

const createApiActionsSet = (prefix: string): ApiActionSet => {
  return {
    REQUEST: `${prefix}.REQUEST`,
    SUCCESS: `${prefix}.SUCCESS`,
    FAILED: `${prefix}.FAILED`,
  }
}

export default {
  api: createApiActionsSet,
}
