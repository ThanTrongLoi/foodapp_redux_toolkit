import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, DetailScreen } from '../screens'

const Stack = createStackNavigator()

const MainStackNavigation = ({ initialRoute = "HomeScreen" }) => {
  return (
    <Stack.Navigator initialRouteName={initialRoute} headerMode="none" >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MainStackNavigation