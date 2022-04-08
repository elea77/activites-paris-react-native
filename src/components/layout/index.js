import styled from 'styled-components'

const Container = styled.ScrollView`
    height: 100%;
`

const ScrollView = styled.ScrollView`
    margin: 10px;
`

const ContainerSafeArea = styled.SafeAreaView`
    marginBottom: 50px;
`

export { ContainerSafeArea, Container, ScrollView }