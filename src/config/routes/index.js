import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from "react-native";
import HomeStack from './homeStack'
import WishlistStack from './wishlistStack'
import MapStack from './mapStack'
// import FlashMessage from 'react-native-flash-message'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator()


const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='HomeStack' component={HomeStack}
        options={{
          title: 'Accueil',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name={focused ? "home" : "home-outline"} size={28} />
          )
        }} />
        <BottomTab.Screen name='MapStack' component={MapStack}
          options={{
            title: 'Carte',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon name={focused ? "map" : "map-outline"} size={28} />
            )
          }} />
        <BottomTab.Screen name='WishlistStack' component={WishlistStack}
          options={{
            title: 'Mes favoris',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon name={focused ? "heart" : "heart-outline"} size={28} />
            )
          }} />
      </BottomTab.Navigator>
      {/* <FlashMessage position='top' /> */}
    </NavigationContainer>
  )
}

export default Routes