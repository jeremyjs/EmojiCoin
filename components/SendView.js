import React from 'react'
import { Container, Content, Image, Input, Item, Picker, Text } from 'native-base';
import { StyleSheet, View } from 'react-native'
import { IntroButton, SubTitle, Title } from '../components'

const navigationOptions = {
  tabBarLabel: 'Send',
  tabBarIcon: (props) => (<Text>💸</Text>),
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

  render (state) {
    const props = this.props

    return (
      <Container style={styles.container}>
        <Content padder contentContainerStyle={styles.contentContainer}>
          <Title> Send 💸 </Title>
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
              placeholder='10.01'
              style={styles.amountInput}
            />
            <Picker
              style={styles.picker}
              selectedValue={this.state.currency}
              onValueChange={(itemValue, itemIndex) => this.setState({currency: itemValue})}
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
        </Content>
      </Container>
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
  container: {
    backgroundColor: '#e7e7e7',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
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
  phraseInput: {
    textAlign: 'center',
  },
  subTitle: {
    padding: 20,
  },
})

export default SendView
