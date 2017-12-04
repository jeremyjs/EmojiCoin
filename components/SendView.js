import React from 'react'
import { Button, Icon, Input, Item, Picker, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { HomeView, IntroButton } from '../components'

import { updateSendWalletAddress } from '../redux/actions'
import store from '../redux/store'

const $lightGray = '#e7e7e7'
const $black = 'black'

const sendViewTitle = 'Send'
const sendViewEmoji = '💸'

const navigationOptions = {
  tabBarLabel: sendViewTitle,
  tabBarIcon: (props) => (<Text {...props}>{sendViewEmoji}</Text>),
}

class SendView extends React.Component {
  static navigationOptions = navigationOptions

  constructor(props) {
    super(props)
    this.state = {
      walletAddress: '',
      amount: '',
      currency: 'EMOJI',
    }
    this.setState.bind(this)
  }

  onInputWalletAddress (newText) {
    this.setState({ walletAddress: newText })
    store.dispatch(updateSendWalletAddress(newText))
  }

  onInputAmount (newAmount) {
    this.setState({ amount: newAmount })
  }

  onPressQrButton () {
    this.props.navigation.navigate('ScanQrCodeView')
  }

  onStoreUpdate () {
    const state = store.getState()
    const { sendWalletAddress } = state
    this.setState({ walletAddress: sendWalletAddress })
  }

  componentWillMount () {
    store.subscribe(this.onStoreUpdate.bind(this))
  }

  render () {
    return (
      <HomeView
        title={`${sendViewTitle} ${sendViewEmoji}`}
      >
        <Item style={styles.walletAddressInputItem}>
          <Input
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={this.onInputWalletAddress.bind(this)}
            placeholder='0x123123123123123123123123'
            value={this.state.walletAddress}
            style={styles.walletAddressInput}
          />
          <Button
            onPress={this.onPressQrButton.bind(this)}
            style={styles.iconButton}
          >
            <Icon
              active
              style={styles.iconButtonIcon}
              name='ios-qr-scanner'
            />
          </Button>
        </Item>
        <Item style={styles.amountInputItem}>
          <Input
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={this.onInputAmount.bind(this)}
            placeholder='0000.00'
            style={styles.amountInput}
          />
          <Picker
            style={styles.picker}
            selectedValue={this.state.currency}
            onValueChange={(itemValue) => this.setState({currency: itemValue})}
          >
            <Picker.Item label="ETH" value="ETH" />
            <Picker.Item label="EMOJI" value="EMOJI" />
          </Picker>
        </Item>
        <IntroButton
          warning block
          onPress={() => this.props.navigation.navigate('SendConfirmationView')}
          text='Send'
          textColor='white'
        />
      </HomeView>
    )
  }
}

const styles = StyleSheet.create({
  amountInput: {
    textAlign: 'left',
  },
  amountInputItem: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  iconButton: {
    backgroundColor: $lightGray,
  },
  iconButtonIcon: {
    color: $black,
  },
  walletAddressInputItem: {
    marginBottom: 40,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  walletAddressInput: {
    textAlign: 'left',
  },
})

export default SendView
