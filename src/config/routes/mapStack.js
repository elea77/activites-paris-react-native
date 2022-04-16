import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Map from '../../screens/map'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Map' component={Map} options={{
        title: 'Carte'
      }} />
      <Stack.Screen name='Details' component={Details}
        options={{
          title: 'Détails'
        }} />
    </Stack.Navigator>
  )
}

export default MapStack