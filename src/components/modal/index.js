import React from 'react';
import styled from 'styled-components'

const Modal = ({ item, index, navigation }) => {
    return (
        <Card key={index}>
            <Image
                source={{
                    uri: item.fields.cover_url
                }}
            />
            <ContentText>
                <Text>{item.fields.title}</Text>
                <Button onPress={() => navigation.navigate('Details', { item: item })}>
                    <TextButton>En savoir plus</TextButton>
                </Button>
            </ContentText>
        </Card>
    )
}

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

const Card = styled.View`
    backgroundColor: white;
    margin: 10px;
    borderRadius: 10px;
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