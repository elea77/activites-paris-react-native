import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from "react-native";
import HomeStack from './homeStack'
import WishlistStack from './wishlistStack'
import MapStack from './mapStack'
// import FlashMessage from 'react-native-flash-message'

const BottomTab = createBottomTabNavigator()


const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='HomeStack' component={HomeStack}
        options={{
          title: 'Accueil',
          headerShown: false,
          tabBarIcon: () => (<Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
          }} style={{width: 28, height: 28}} />)
        }} />
        <BottomTab.Screen name='MapStack' component={MapStack}
          options={{
          title: 'Carte',
            headerShown: false,
            tabBarIcon: () => (<Image source={{
              uri: "https://cdn-icons-png.flaticon.com/512/876/876205.png"
            }} style={{width: 28, height: 28}} />)
          }} />
        <BottomTab.Screen name='WishlistStack' component={WishlistStack}
          options={{
            title: 'Mes favoris',
            headerShown: false,
            tabBarIcon: () => (<Image source={{
              uri: "https://cdn-icons-png.flaticon.com/512/126/126471.png"
            }} style={{width: 28, height: 28}} />)
          }} />
      </BottomTab.Navigator>
      {/* <FlashMessage position='top' /> */}
    </NavigationContainer>
  )
}

export default Routes