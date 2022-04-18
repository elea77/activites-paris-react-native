import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Map from '../../screens/map'
import Details from '../../screens/details'
import { useTranslation } from 'react-i18next'

const Stack = createNativeStackNavigator()

const MapStack = () => {
  const { t } = useTranslation()
  return (
    <Stack.Navigator>
      <Stack.Screen name='Map' component={Map} options={{
        title: t('menu.map')
      }} />
      <Stack.Screen name='Details' component={Details}
        options={{
          title: 'Détails'
        }} />
    </Stack.Navigator>
  )
}

export default MapStack