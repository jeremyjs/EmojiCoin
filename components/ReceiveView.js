import React from 'react'
import { Container, Content, Text } from 'native-base';
import { Image, StyleSheet } from 'react-native'
import { IntroButton, SubTitle, Title } from '../components'

const navigationOptions = {
  tabBarLabel: 'Receive',
  tabBarIcon: (props) => (<Text>💰</Text>),
}

class ReceiveView extends React.Component {
  static navigationOptions = navigationOptions

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content padder contentContainerStyle={styles.contentContainer}>
          <Title> Receive 💰 </Title>
          <Image
            source={require('../assets/img/qr-code.png')}
            style={styles.qrCode}
          />
          <Text> 0x2312312323kk32312312323kk3 </Text>
          <SubTitle style={styles.subTitle}>
            You can receive Emojicoins (EMOJI) or Ether (ETH). Warning! Other coins will be lost forever. ☠
          </SubTitle>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7e7',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCode: {
    height: 256,
    width: 256,
  },
  subTitle: {
    padding: 20,
  },
})

export default ReceiveView
