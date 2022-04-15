import React, { useState, useEffect } from 'react'
import { Container } from '../components/layout'
import styled from 'styled-components'
import { Title } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { image, View, Text, TouchableOpacity } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import { useFocusEffect } from '@react-navigation/native'
import ButtonFavorite from '../components/buttonFavorite'

const Details = ({ route }) => {

  // const favorites = useSelector(state => state.favorites.favoritesList)
  const activity = useSelector(state => state.activities.activity)
  const dispatch = useDispatch()

  const [thisActivity, setThisActivity] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    params: { item }
  } = route

  // const checkFavorite = () => {
  //   dispatch(allTheActions.favorites.checkFavorite({recordid: item.recordid, title: item.fields.title, img: item.fields.cover_url}))
  // }

  const setTheActivity = () => {
    if(!item.fields.description){
      dispatch(allTheActions.activities.getActivity(item.recordid))
      setThisActivity(activity[0])
    }else{
      setThisActivity(item)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setTheActivity()
  }, [])

  if(isLoading){
    return (
      <Container>
        <Text>Ca charge trou du cul</Text>
      </Container>
    )
  }

  return (
    <Container>
      <Image source={{ uri: thisActivity.fields.cover_url }} />
      <ContainerText>
        <Title>{thisActivity.fields.title}</Title>
        <Text> {thisActivity.fields.tags} </Text>
        <Adress>
          <Text> {thisActivity.fields.address_name} </Text>
          <Text> {thisActivity.fields.address_street} </Text>
          <Text> {thisActivity.fields.address_zipcode} </Text>
          <City> {thisActivity.fields.address_city} </City>
        </Adress>
        <ReadMore numberOfLines={5} seeMoreText='Lire plus' seeLessText='Lire moins'>
          <TextDescription> {thisActivity.fields.description.replace(/<[^>]*>?/gm, '')} </TextDescription>
        </ReadMore>
        <ButtonFavorite activity={thisActivity}/>
        {/* <Button
          onPress={() => checkFavorite()}
        >
          <TextButton>Ajouter aux favoris</TextButton>
        </Button> */}
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