import React from 'react'
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native'
import { IntroButton, Title, Subtle, SubTitle } from '../components'

const $white = 'white'

const IntroView = (props) => (
  <Container style={styles.container}>
    <Content padder contentContainerStyle={styles.contentContainer}>
      <Title>
        emoji 😍 <Subtle>coin</Subtle>
      </Title>
      <SubTitle>
        Welcome to the future of cryptocurrency
      </SubTitle>
      <IntroButton
        warning block
        textColor='white'
        onPress={() => props.navigation.navigate('PhraseView')}
      >
        Create Wallet
      </IntroButton>
      <IntroButton dark bordered block>
        Restore from Backup
      </IntroButton>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: $white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: $white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default IntroView
