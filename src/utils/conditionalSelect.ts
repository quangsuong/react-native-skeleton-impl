/**
 * @flow
 */

import { Style } from '@src/types/local'

export type ConditionalItem<T> = {
  condition: boolean | void
  item: T
}

export const conditionalSelect = <T>(...conditions: ConditionalItem<T>[]): T[] => {
  return conditions.filter(({ condition }) => condition).map(({ item }) => item)
}

type ConditionalStyle = {
  condition: boolean | void
  style: Style<any>
}

export const selectStyles = (...conditionalStyles: Array<ConditionalStyle>): Array<Style<any>> => {
  const items = conditionalStyles.map(({ condition, style }) => ({ condition, item: style }))
  return conditionalSelect<Style<any>>(...items)
}
