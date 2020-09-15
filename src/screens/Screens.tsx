import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, Text } from 'react-native'
import { Icon } from 'native-base'

const Stack = createStackNavigator()

const SampleScreen = () => (
  <SafeAreaView>
    <Icon name="book" type="Ionicons" />

    <Text>Sample Screen</Text>
  </SafeAreaView>
)

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={SampleScreen} name="Sample" options={{ title: 'Sample screen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens
