import styled from 'styled-components'

const Container = styled.ScrollView`
    height: 100%;
    backgroundColor: ${props => props.theme.BACKGROUND_COLOR};
`

const ScrollView = styled.ScrollView`
    paddingLeft: 10px;
    paddingRight: 10px;
    backgroundColor: ${props => props.theme.BACKGROUND_COLOR};

`

const ContainerView = styled.View`
    height: 100%;    
    width: 100%;
    backgroundColor: ${props => props.theme.BACKGROUND_COLOR};
`

const ContainerSafeArea = styled.SafeAreaView`
    width: 100%;
    height: 100%;   
    backgroundColor: ${props => props.theme.BACKGROUND_COLOR};
`

const Grid = styled.View`
  flex: 1;
  flexDirection: row;
  flexWrap: wrap;
  alignItems: flex-start;
  margin: 10px;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
`

const Column = styled.View`
  width: 50%;
  backgroundColor: ${props => props.theme.BACKGROUND_COLOR};
`

const ContainerText = styled.View`
  margin: 10px;
  alignItems: center;
  backgroundColor: ${props => props.theme.BACKGROUND_COLOR};
`

const AbsoluteView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  backgroundColor: ${props => props.theme.BACKGROUND_COLOR};
`


const TopAbsoluteView = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  flex: 1;
  flexDirection: row;
`

export { ContainerSafeArea, Container, ScrollView, ContainerView, Grid, Column, ContainerText, AbsoluteView, TopAbsoluteView }