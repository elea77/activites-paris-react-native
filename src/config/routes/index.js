import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from "react-native";
import HomeStack from './homeStack'
import WishlistStack from './wishlistStack'
// import FlashMessage from 'react-native-flash-message'

const BottomTab = createBottomTabNavigator()


const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Accueil' component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (<Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
          }} style={{width: 28, height: 28}} />)
        }} />
        <BottomTab.Screen name='Mes favoris' component={WishlistStack}
          options={{
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