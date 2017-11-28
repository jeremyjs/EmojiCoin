import React from 'react'
import { Text } from 'native-base';
import { Image, StyleSheet } from 'react-native'
import { HomeView, SubTitle } from '../components'

const sendViewTitle = 'Receive'
const sendViewEmoji = '💰'

const navigationOptions = {
  tabBarLabel: sendViewTitle,
  tabBarIcon: (props) => (<Text {...props}>{sendViewEmoji}</Text>),
}

class ReceiveView extends React.Component {
  static navigationOptions = navigationOptions

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <HomeView
        title={`${sendViewTitle} ${sendViewEmoji}`}
      >
        <Image
          source={require('../assets/img/qr-code.png')}
          style={styles.qrCode}
        />
        <Text style={styles.walletAddress}>
          0x2312312323kk32312312323kk3
        </Text>
        <SubTitle style={styles.subTitle}>
          You can receive Emojicoins (EMOJI) or Ether (ETH). Warning! Other coins will be lost forever. ☠
        </SubTitle>
      </HomeView>
    )
  }
}

const styles = StyleSheet.create({
  qrCode: {
    height: 256,
    width: 256,
    marginBottom: 40,
  },
  subTitle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  walletAddress: {
    marginBottom: 20,
  }
})

export default ReceiveView
