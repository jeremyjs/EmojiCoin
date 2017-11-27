import React from 'react'
import { AppLoading, Font } from 'expo'
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components'
import { IntroView } from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areFontsLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Open_Sans': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
      'Open_Sans_Bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
      'Open_Sans_Light': require('./assets/fonts/OpenSans/OpenSans-Light.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_Medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ areFontsLoaded: true })
  }

  render() {
    return (
      <StyleProvider style={getTheme()}>
        {this.state.areFontsLoaded ?
          <IntroView />
        :
          <AppLoading />
        }
      </StyleProvider>
    )
  }
}

export default App
