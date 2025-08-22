import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/Navigation/AppNavigator'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  )
}

export default App