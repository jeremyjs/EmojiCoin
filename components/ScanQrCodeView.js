import React from 'react'
import { Body, Button, Container, Content, Header, Icon, Left, Title } from 'native-base'
import { ExpoScanQrView, HomeView } from '../components'

import { updateSendWalletAddress } from '../redux/actions'
import store from '../redux/store'

class ScanQrCodeView extends React.Component {
  constructor (props) {
    super(props)
  }

  onQrCodeRead = (text) => {
    store.dispatch(updateSendWalletAddress(text))
    this.props.navigation.navigate('SendView')
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>
              Scan a QR Code
            </Title>
          </Body>
        </Header>
        <Content>
          <ExpoScanQrView
            onQrCodeRead={this.onQrCodeRead.bind(this)}
          />
        </Content>
      </Container>
    )
  }
}
export default ScanQrCodeView
