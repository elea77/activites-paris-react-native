import styled from 'styled-components'

const Container = styled.ScrollView`
    height: 100%;
`

const ScrollView = styled.ScrollView`
    margin: 10px;
`

const ContainerView = styled.View`
    height: 100%;    
    width: 100%;
`

const ContainerSafeArea = styled.SafeAreaView`
    marginBottom: 50px;
    width: 100%;
`

const Grid = styled.View`
  flex: 1
  flexDirection: row
  flexWrap: wrap
  alignItems: flex-start
  margin: 10px
`

const Column = styled.View`
  width: 50%;
`


export { ContainerSafeArea, Container, ScrollView, ContainerView, Grid, Column }