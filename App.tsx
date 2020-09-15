import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { ErrorBoundary } from '@src/components'
import { persistor, store } from '@src/redux/store'
import Screens from '@src/screens'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ErrorBoundary>
            <Screens />
          </ErrorBoundary>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

// export { default } from './storybook'

export default App
