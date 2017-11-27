import React from 'react'

import { Root } from 'native-base'
import { StackNavigator } from 'react-navigation'

import IntroView from './IntroView'
import PhraseView from './PhraseView'
import PhraseConfirmView from './PhraseConfirmView'
import MainNavigator from './HomeView'

const AppNavigator = StackNavigator(
  {
    IntroView: { screen: IntroView },
    PhraseView: { screen: PhraseView },
    PhraseConfirmView: { screen: PhraseConfirmView },
    HomeView: { screen: MainNavigator },
  },
  {
    initialRouteName: 'HomeView',
    headerMode: 'none',
  }
)

const AppRoot = () => (
  <Root>
    <AppNavigator />
  </Root>
)

export default AppRoot
