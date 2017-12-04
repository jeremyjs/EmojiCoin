import React from 'react'

import { Root } from 'native-base'
import { StackNavigator } from 'react-navigation'

import IntroView from './IntroView'
import PhraseView from './PhraseView'
import PhraseConfirmView from './PhraseConfirmView'
import MainNavigator from './MainNavigator'

const AppNavigator = StackNavigator(
  {
    IntroView: { screen: IntroView },
    PhraseView: { screen: PhraseView },
    PhraseConfirmView: { screen: PhraseConfirmView },
    MainNavigator: { screen: MainNavigator },
  },
  {
    initialRouteName: 'IntroView',
    headerMode: 'none',
  }
)

const AppRoot = () => (
  <Root>
    <AppNavigator />
  </Root>
)

export default AppRoot
