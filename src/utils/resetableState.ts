/**
 * @flow
 */

import produce from 'immer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const createResetableState = (resetActionType: any, initialState: any) => (
  reducer: (state: any, action: any) => any
) =>
  produce((state: any, action: any) => {
    switch (action.type) {
      case resetActionType:
        Object.entries(initialState).forEach(([key, value]) => {
          // eslint-disable-next-line no-param-reassign
          state[key] = value
        })
        break

      default:
        reducer(state, action)
        break
    }
  }, initialState)

export const useResetState = (resetState: () => { type: string }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetState())
    }
  }, [dispatch, resetState])
}
