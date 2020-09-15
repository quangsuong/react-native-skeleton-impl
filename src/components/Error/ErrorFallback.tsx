/**
 * @flow
 */

import React, { memo } from 'react'
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
})

type Props = {
  reload: () => any
}

function ErrorFallback({ reload }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>Something went wrong</Text>

        <View style={styles.buttonContainer}>
          <Button onPress={reload} title="Reload" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default memo<Props>(ErrorFallback)
