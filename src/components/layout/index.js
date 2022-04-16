import styled from 'styled-components'

const Container = styled.ScrollView`
    height: 100%;
`

const ScrollView = styled.ScrollView`
    marginLeft: 10px;
    marginRight: 10px;

`

const ContainerView = styled.View`
    height: 100%;    
    width: 100%;
`

const ContainerSafeArea = styled.SafeAreaView`
    //marginBottom: 50px;
    width: 100%;
`

const Grid = styled.View`
  flex: 1;
  flexDirection: row;
  flexWrap: wrap;
  alignItems: flex-start;
  margin: 10px;
`

const Column = styled.View`
  width: 50%;
`

const ContainerText = styled.View`
  margin: 10px;
  alignItems: center;
`

const AbsoluteView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
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