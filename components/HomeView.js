import React from 'react'
import { Button, Footer, FooterTab, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'

import SendView from './SendView'
import ReceiveView from './ReceiveView'
import EmojisView from './EmojisView'
import SettingsView from './SettingsView'

const MainNavigator = TabNavigator(
  {
    SendView: { screen: SendView },
    ReceiveView: { screen: ReceiveView },
    EmojisView: { screen: EmojisView },
    SettingsView: { screen: SettingsView },
  },
  {
    initialRouteName: 'EmojisView',
    tabBarPosition: 'bottom',
  }
)

export default MainNavigator
