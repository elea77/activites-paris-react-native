import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wishlist from '../../screens/wishlist'

const Stack = createNativeStackNavigator()

const WishlistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Mes favoris' component={Wishlist} />
    </Stack.Navigator>
  )
}

export default WishlistStack