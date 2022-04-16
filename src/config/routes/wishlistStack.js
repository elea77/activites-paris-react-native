import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wishlist from '../../screens/wishlist'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const WishlistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Mes favoris' component={Wishlist} />
      <Stack.Screen name='Details' component={Details}
        options={{
          title: 'Détails'
        }} />
    </Stack.Navigator>
  )
}

export default WishlistStack