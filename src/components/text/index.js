import styled from 'styled-components'

const TitleListing = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 10px;
`

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
`

const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`

const CommonText = styled.Text`
`

const Adress = styled.View`
  alignSelf: flex-end
  marginTop: 10px
  margin-bottom : 10px;
`

const City = styled.Text`
  color: #ffffff
  textAlign: center
  background: #2d8aa7
`


export { TitleListing, Title, CommonText, Adress, City, SubTitle }