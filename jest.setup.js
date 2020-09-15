import { NativeModules } from 'react-native'
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'
import lodash from 'lodash'

import './src/i18n'

// eslint-disable-next-line global-require
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
jest.mock('react-native/Libraries/Utilities/BackHandler')
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)

jest.mock('./src/services/errorNotifiers')

jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn())
jest.spyOn(global.console, 'group').mockImplementation(() => jest.fn())
jest.spyOn(lodash, 'debounce').mockImplementation(jest.fn((fn) => fn))

NativeModules.StatusBarManager.getHeight = jest.fn().mockReturnValue(20)

jest.useFakeTimers()
