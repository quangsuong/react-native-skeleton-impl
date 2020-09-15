import { StyleProp } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface ErrorNotifier {
  notify(error: any, errorInfo: any): any
  init(): any
}

export type FontSize =
  | 'xxx-small'
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'

export type Style<T> = StyleProp<T>

export interface ApiActionSet {
  REQUEST: string
  SUCCESS: string
  FAILED: string
}

export interface ReduxAction<Payload> {
  type: string
  payload: Payload
}

export interface ReduxState {
  userData: {
    authFeature: {}
  }
  globalData: {}
}

export interface Response<Data, Metadata = {}> {
  data: Data
  metadata: Metadata
}

export interface Error {
  message: string
  response?: any
}

export type RootStackParamList = {}

// @ts-ignore
export type Route<T> = RouteProp<RootStackParamList, T>

export type Navigation = StackNavigationProp<any, any>
