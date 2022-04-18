import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Wishlist from '../../screens/wishlist'
import Details from '../../screens/details'
import { useTranslation } from 'react-i18next'
const Stack = createNativeStackNavigator()

const WishlistStack = () => {

  const { t } = useTranslation()
  return (
    <Stack.Navigator>
      <Stack.Screen name='Mes favoris' component={Wishlist}
      options={{
        title: t('page.fav')
      }} />
      <Stack.Screen name='Details' component={Details}
        options={{
          title: 'Détails'
        }} />
    </Stack.Navigator>
  )
}

export default WishlistStack