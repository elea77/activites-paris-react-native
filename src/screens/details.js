import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import styled from 'styled-components'
import { Title } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { image, View, Text, TouchableOpacity } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';

const Details = ({ route }) => {

  const favorites = useSelector(state => state.favorites.favoritesList)
  const activity = useSelector(state => state.activities.activity)
  const dispatch = useDispatch()

  const [thisActivity, setThisActivity] = useState({});

  const {
    params: { item }
  } = route

  const checkFavorite = () => {
    dispatch(allTheActions.favorites.checkFavorite({recordid: item.recordid, title: item.fields.title, img: item.fields.cover_url}))
  }

  useEffect(() => {
    console.log('sheeeehdouqhduqd')
    if(!item.fields.description){
      dispatch(allTheActions.activities.getActivity(item.recordid))
      setThisActivity(activity)
      console.log(thisActivity)
    }else{
      setThisActivity(item)
      console.log('test')
      console.log(thisActivity)
    }
  }, [])

  return (
    <Container>
      <Image source={{ uri: item.fields.cover_url }} />
      <ContainerText>
        <Title>{item.fields.title}</Title>
        <Text> {item.fields.tags} </Text>
        <Adress>
          <Text> {item.fields.address_name} </Text>
          <Text> {item.fields.address_street} </Text>
          <Text> {item.fields.address_zipcode} </Text>
          <City> {item.fields.address_city} </City>
        </Adress>
        <ReadMore numberOfLines={5} seeMoreText='Lire plus' seeLessText='Lire moins'>
          <TextDescription> {item.fields.description.replace(/<[^>]*>?/gm, '')} </TextDescription>
        </ReadMore>
        <Button
          onPress={() => checkFavorite()}
        >
          <TextButton>Ajouter aux favoris</TextButton>
        </Button>
      </ContainerText>
    </Container>
  )
}

Details.propTypes = {}

const Adress = styled.View`
  alignSelf: flex-end
  marginTop: 10px
  margin-bottom : 10px;
`


const Button = styled.TouchableOpacity`
  marginTop: 50px
  alignItems: center
  background: #2d8aa7,
  width: 150px;
  height: 40px;
  borderRadius: 20px

`

const TextButton = styled.Text`
  paddingTop: 10px
  alignItems: center;
  color: #ffffff

`
const ContainerText = styled.View`
  margin: 10px;
  alignItems: center


`
const TextDescription = styled.Text`
`

const City = styled.Text`
color: #ffffff
textAlign: center
background: #2d8aa7
`

const Image = styled.Image`
  width: 400px;
  height: 300px;
  margin-bottom : 5px;
`



export default Details