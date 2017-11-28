import React from 'react'
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native'
import { Title } from '../components'

const $lightGray = '#e7e7e7'

const HomeView = ({ title, children, ...props }) => (
  <Container style={homeStyles.container} {...props}>
    <Title style={homeStyles.title}>
      {title}
    </Title>
    <Content padder contentContainerStyle={homeStyles.contentContainer}>
      {children}
    </Content>
  </Container>
)

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: $lightGray,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: $lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
})

export default HomeView
