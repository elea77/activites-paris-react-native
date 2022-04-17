import styled from 'styled-components'

const TitleListing = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 10px;
  color: ${props => props.theme.TEXT_COLOR};
`

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
  color: ${props => props.theme.TEXT_COLOR};
`

const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: ${props => props.theme.TEXT_COLOR};
`

const CommonText = styled.Text`
  color: ${props => props.theme.TEXT_COLOR};
`

const Adress = styled.View`
  alignSelf: flex-end
  marginTop: 10px
  margin-bottom : 10px;
  color: ${props => props.theme.TEXT_COLOR};
`

const City = styled.Text`
  textAlign: center;
  backgroundColor: ${props => props.theme.BACKGROUND_COLOR};
  color: ${props => props.theme.TEXT_COLOR};
`


export { TitleListing, Title, CommonText, Adress, City, SubTitle }