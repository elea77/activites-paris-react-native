import React from 'react';
import styled from 'styled-components'
import Cover from '../cover'

const Button = ({item, navigation}) => {
    return (
      <Btn onPress={() => navigation.navigate('Details', { item: item })}>
          <View>
            <Cover urlImage={item.fields.cover_url} />
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

const EventTitle = styled.Text`
  textAlign: center;
  marginTop: 5px;
  marginBottom: 10px;
  fontWeight: bold;
  fontSize: 14px;
  width: 100%;
`

export default Button