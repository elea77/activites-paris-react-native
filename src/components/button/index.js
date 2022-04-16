import React from 'react';
import styled from 'styled-components'
import Cover from '../cover'


const Button = ({ item, navigation }) => {

  var afficheImage ; 

  if ( item.fields.cover_url ) {
    afficheImage = <Cover urlImage={item.fields.cover_url} />

  } else {
    afficheImage = <ImageStyled
    source={require('../../assets/unknown.png')}
  />

  }
  return (
    <Btn onPress={() => navigation.navigate('Details', { item: item })}>
      <View>
        { afficheImage }
        <EventTitle ellipsizeMode='tail' numberOfLines={1}>{item.fields.title}</EventTitle>
      </View>
    </Btn>
  )
}

const View = styled.View`
  margin: 5px;
`
const Btn = styled.TouchableOpacity`
  width: 50%;
`
const ImageStyled = styled.Image`
width: 100%;
height: 120px;
borderRadius: 5px;
resizeMode: cover;`

const EventTitle = styled.Text`
  textAlign: center;
  marginTop: 5px;
  marginBottom: 10px;
  fontWeight: bold;
  fontSize: 14px;
  width: 100%;
`

export default Button