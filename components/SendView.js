import React from 'react'
import { Input, Item, Picker, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { HomeView, IntroButton } from '../components'

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
    this.onInput.bind(this)
    this.setState.bind(this)
  }

  onInput (newText) {
    this.setState({ inputText: newText })
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
            onChangeText={this.onInput.bind(this)}
            placeholder='0x123123123123123123123123'
            style={styles.walletAddressInput}
          />
        </Item>
        <Item style={styles.amountInputItem}>
          <Input
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={this.onInput.bind(this)}
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
