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
    initialRouteName: 'SendView',
    tabBarPosition: 'bottom',
  }
)

export default MainNavigator