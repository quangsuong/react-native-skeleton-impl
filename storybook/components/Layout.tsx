/* eslint-disable react-native/no-color-literals */
/**
 * @flow
 */

import React from 'react'
import type { ReactNode } from 'react/index'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import SplashScreen from 'react-native-splash-screen'

import { Style } from '@src/types/local'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: 'white',
  },
})

type Props = {
  children: ReactNode
  style?: Style<ViewStyle>
}

export default function Layout({ children, style }: Props) {
  // useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  return (
    <SafeAreaProvider>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaProvider>
  )
}

Layout.defaultProps = {
  style: undefined,
}
