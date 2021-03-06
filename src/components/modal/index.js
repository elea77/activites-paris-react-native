import React from 'react';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';
import styled from 'styled-components'
import { Grid, Column } from '../layout';



const Modal = ({ item, navigation }) => {
    return (
        <Card>
            <Image
                source={{
                    uri: item.fields.cover_url
                }}
            />
            <ContentText>
                <Text>{item.fields.title}</Text>
                <Grid>
                    <Column>
                        <Button onPress={() => navigation.navigate('Details', { item: item })}>
                            <TextButton>En savoir plus</TextButton>
                        </Button>
                    </Column>
                    <Column>
                        <Button onPress={() => NativeLinkingManager.openURL(`https://www.google.com/maps/dir//${item.fields.address_street.replace(' ', '+')},+${item.fields.address_zipcode}+${item.fields.address_city.replace(' ', '+')}/@${item.fields.lat_lon?.[0]},${item.fields.lat_lon?.[1]}`)}>
                            <TextButton>Itinéraire</TextButton>
                        </Button>
                    </Column>
                </Grid>
            </ContentText>
        </Card>
    )
}


const Card = styled.View`
    backgroundColor: white;
    margin: 10px;
    borderRadius: 10px;
`

const Button = styled.TouchableOpacity`
    alignItems: center;
    background: #2d8aa7;
    width: 150px;
    padding: 8px;
    borderRadius: 20px;
    marginTop: 10px;
`

const Image = styled.Image`
    width: 100%;
    minHeight: 110px;
    resizeMode: cover;
    borderTopLeftRadius: 5px;
    borderTopRightRadius: 5px;
`

const ContentText = styled.View`
    padding: 10px;
`

const Text = styled.Text``

const TextButton = styled.Text`
    color: white;
    alignItems: center;
`


export default Modal