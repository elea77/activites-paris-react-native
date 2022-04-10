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

export { ContainerSafeArea, Container, ScrollView, ContainerView }