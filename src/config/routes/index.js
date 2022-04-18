import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './homeStack'
import WishlistStack from './wishlistStack'
import MapStack from './mapStack'
import FlashMessage from 'react-native-flash-message'
import Icon from 'react-native-vector-icons/Ionicons'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'

const BottomTab = createBottomTabNavigator()

const Routes = () => {

  const language = useSelector(state => state.settings.language)
  const theme = useSelector(state => state.settings.theme)

  const { t, i18n } = useTranslation()
  useEffect(() => {
    if(language){
      i18n.changeLanguage('fr')
    }else{
      i18n.changeLanguage('en')
    }
  }, [language])
  return (
    <ThemeProvider theme={theme == true ? lightTheme : darkTheme}>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name='HomeStack' component={HomeStack}
            options={{
              title: t('menu.home'),
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Icon name={focused ? "home" : "home-outline"} size={28} color={focused ? '#2d8aa7' : 'black'} />
              )
            }} />
          <BottomTab.Screen name='MapStack' component={MapStack}
            options={{
              title: t('menu.map'),
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Icon name={focused ? "map" : "map-outline"} size={28} color={focused ? '#2d8aa7' : 'black'} />
              )
            }} />
          <BottomTab.Screen name='WishlistStack' component={WishlistStack}
            options={{
              title: t('menu.fav'),
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Icon name={focused ? "heart" : "heart-outline"} size={28} color={focused ? '#2d8aa7' : 'black'} />
              )
            }} />
        </BottomTab.Navigator>
        <FlashMessage position='top' />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes