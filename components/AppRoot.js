import React from 'react'

import { Root } from 'native-base'
import { StackNavigator } from 'react-navigation'

import IntroView from './IntroView'
import PhraseView from './PhraseView'
import PhraseConfirmView from './PhraseConfirmView'
import MainNavigator from './MainNavigator'
import ScanQrCodeView from './ScanQrCodeView'

const AppNavigator = StackNavigator(
  {
    IntroView: { screen: IntroView },
    PhraseView: { screen: PhraseView },
    PhraseConfirmView: { screen: PhraseConfirmView },
    MainNavigator: { screen: MainNavigator },
    ScanQrCodeView: { screen: ScanQrCodeView },
  },
  {
    initialRouteName: 'MainNavigator',
    headerMode: 'none',
  }
)

const AppRoot = () => (
  <Root>
    <AppNavigator />
  </Root>
)

export default AppRoot
