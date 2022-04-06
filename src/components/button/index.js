import React from 'react';
import styled from 'styled-components'
import Cover from '../cover'

const Button = ({item, navigation}) => {
    return (
        <Btn onPress={() => navigation.navigate('Details', { item: item })}>
          <Cover urlImage={item.fields.cover_url} />
          <EventTitle ellipsizeMode='tail' numberOfLines={1}>{item.fields.title}</EventTitle>
        </Btn>
    )
}

const Btn = styled.TouchableOpacity`
  width: auto
  margin: auto
`

const EventTitle = styled.Text`
  textAlign: center
  marginTop: 5px
  marginBottom: 10px
  fontWeight: bold
  fontSize: 14px
  width: 180px;
`

export default Button