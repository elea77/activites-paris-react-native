import React from 'react';
import styled from 'styled-components'

const ImageHome = ({ item, navigation }) => {
    return (
        <Btn onPress={() => navigation.navigate('Details', { item: item })}>
            <View>
                <Image source={{
                    uri: item.fields.cover_url
                }} />
                <EventTitle ellipsizeMode='tail' numberOfLines={1}>{item.fields.title}</EventTitle>
            </View>
        </Btn>
    )
}

const View = styled.View`
  margin: 5px;
  marginBottom: 130px;
`

const Btn = styled.TouchableOpacity`
  width: 100%;
`

const Image = styled.Image`
  width: 380px;
  height: 220px;
  margin-bottom : 5px;
`

const EventTitle = styled.Text`
  textAlign: center;
  marginTop: 5px;
  marginBottom: 10px;
  fontWeight: bold;
  fontSize: 14px;
  width: 100%;
`

export default ImageHome