import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/home'
import Details from '../../screens/details'
import Settings from '../../screens/settings'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTranslation } from 'react-i18next'

const Stack = createNativeStackNavigator()

const HomeStack = ({navigation}) => {

  const { t } = useTranslation()
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}
        options={{
          title: t('menu.home'),
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Settings') }
              color="black">
              <Icon name='settings-outline' size={20} />
            </Button>
          ),
      }} />
      <Stack.Screen name='Details' component={Details}
        options={{
          title: 'Détails'
        }} />
      <Stack.Screen name='Settings' component={Settings}
      options={{
        title: t('page.settings')
      }} />
    </Stack.Navigator>
  )
}

const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`

export default HomeStack