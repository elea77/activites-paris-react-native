import React from 'react';
import styled from 'styled-components'
import ButtonFavorite from '../buttonFavorite'
import { TopAbsoluteView } from '../layout';
import Icon from 'react-native-vector-icons/Ionicons'
import notifee from '@notifee/react-native';


const ImageDetails = ({ item }) => {

    var afficheImage ; 

    if ( item.fields.cover_url ) {
      afficheImage = <Image source={{
        uri: item.fields.cover_url
    }} />

    } else {
      afficheImage = <Image
      source={require('../../assets/unknown.png')} />
    }

    async function onDisplayNotification() {

      await notifee.requestPermission()
      // Create a channel
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
  
      // Display a notification
      await notifee.displayNotification({
        title: 'Hé ho toi !',
        body: 'On arrête LOL et on va sur Paris !',
        android: {
          channelId
        },
      });
    }

    return (
      <View>
          { afficheImage }
          <TopAbsoluteView>
              <Icon onPress={() => onDisplayNotification()} name="notifications-outline" size={28}/>
              <ButtonFavorite activity={item} />
          </TopAbsoluteView>

      </View>
    )
}

const View = styled.View`
  width: 100%;
`

const Image = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom : 5px;
`


export default ImageDetails