import React, { useState, useEffect } from 'react'
import { Container, ContainerText } from '../components/layout'
import styled from 'styled-components'
import { CommonText, Title, Adress, City, SubTitle } from '../components/text'
import allTheActions from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import ReadMore from '@fawazahmed/react-native-read-more';
import MapView, { Marker } from 'react-native-maps';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';
import ImageDetails from '../components/imageDetails'


const Details = ({ route }) => {

  const activity = useSelector(state => state.activities.activity)
  const dispatch = useDispatch()

  const [thisActivity, setThisActivity] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    params: { item }
  } = route


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
        <CommonText>Chargement en cours...</CommonText>
      </Container>
    )
  }


  return (
    <Container>
      <ImageDetails item={thisActivity} />
      <ContainerText>
        <Title>{thisActivity.fields.title}</Title>
        <CommonText> {thisActivity.fields.tags} </CommonText>
        <Adress>
          <CommonText> {thisActivity.fields.address_name} </CommonText>
          <CommonText> {thisActivity.fields.address_street} </CommonText>
          <CommonText> {thisActivity.fields.address_zipcode} </CommonText>
          <City> {thisActivity.fields.address_city} </City>
        </Adress>
        <ReadMore numberOfLines={5} seeMoreText='Lire plus' seeLessText='Lire moins'>
          <CommonText>{thisActivity.fields.description.replace(/<[^>]*>?/gm, '')} </CommonText>
        </ReadMore>
      </ContainerText>
      <ContainerText>
        <SubTitle>Comment m'y rendre ?</SubTitle>
        <MapView
          style={{ width: "100%", height: 200}}
          initialRegion={{
            latitude: 48.8534,
            longitude: 2.3488,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          moveOnMarkerPress={true}
          onMarkerSelect={() => NativeLinkingManager.openURL(`https://www.google.com/maps/dir//${item.fields.address_street.replace(' ', '+')},+${item.fields.address_zipcode}+${item.fields.address_city.replace(' ', '+')}/@${item.fields.lat_lon?.[0]},${item.fields.lat_lon?.[1]}`)} >
            <Marker
              coordinate={{ latitude : thisActivity.fields.lat_lon?.[0] , longitude : thisActivity.fields.lat_lon?.[1] }}
            />
        </MapView>
      </ContainerText>
    </Container>
  )
}

Details.propTypes = {}

const Image = styled.Image`
  width: 400px;
  height: 300px;
  margin-bottom : 5px;
`



export default Details