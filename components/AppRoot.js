import React from 'react'

import { Platform } from 'react-native'
import { Root } from 'native-base'
import { StackNavigator } from 'react-navigation'

import IntroView from './IntroView'

const AppNavigator = StackNavigator(
  {
    IntroView: { screen: IntroView },
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
