import React from 'react'
import { Text } from 'react-native'
import { HomeView, IntroButton } from '../components'

const sendViewTitle = 'Settings'
const sendViewEmoji = '🛠'

const navigationOptions = {
  tabBarLabel: sendViewTitle,
  tabBarIcon: (props) => (<Text {...props}>{sendViewEmoji}</Text>),
}

class SettingsView extends React.Component {
  static navigationOptions = navigationOptions

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <HomeView
        title={`${sendViewTitle} ${sendViewEmoji}`}
      >
        <IntroButton
          danger block
          onPress={() => this.props.navigation.navigate('IntroView')}
          text='Logout'
          textColor='white'
        />
      </HomeView>
    )
  }
}

export default SettingsView
