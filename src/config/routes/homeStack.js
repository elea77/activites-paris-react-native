import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/home'
import Details from '../../screens/details'
import Settings from '../../screens/settings'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator()

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}
        options={{
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
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  )
}

const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`

const Text = styled.Text`
  width: 40px;
  height: 40px;
`


export default HomeStack