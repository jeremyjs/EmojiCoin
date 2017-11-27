import React from 'react'
import { Container, Content, Image, Input, Item, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { IntroButton, SubTitle, Title } from '../components'

const navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: (props) => (<Text>🛠</Text>),
}

class SettingsView extends React.Component {
  static navigationOptions = navigationOptions

  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
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
          <Title style={styles.title}> Settings 🛠 </Title>
          <IntroButton
            danger block
            onPress={() => this.props.navigation.navigate('IntroView')}
            text='Logout'
            textColor='white'
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e7e7',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phraseInputItem: {
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  phraseInput: {
    textAlign: 'center',
  },
  subTitle: {
    padding: 20,
  },
  title: {
    marginBottom: 40,
  },
})

export default SettingsView
