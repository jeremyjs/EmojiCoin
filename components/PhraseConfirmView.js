import React from 'react'
import { Container, Content, Icon, Input, Item, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import { IntroButton, SubTitle, Title } from '../components'

const $white = 'white'

const statusIconMap = {
  none: null,
  error: <Icon name='close-circle' />,
  success: <Icon name='checkmark-circle' />,
}

const InputIcon = ({ status }) => statusIconMap[status]

const isError = (status) => status === 'error'
const isSuccess = (status) => status === 'success'

class PhraseConfirmView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPhraseInputEditable: true,
      phraseInputStatus: 'none',
    }
    this.onPhraseInput.bind(this)
    this.setState.bind(this)
  }

  onPhraseInput (newText) {
    const secretPhrase = 'secret'
    const normalizedText = newText.trim().toLowerCase()

    if (normalizedText === secretPhrase) {
      this.setState({ isPhraseInputEditable: false })
      this.setState({ phraseInputStatus: 'success' })
      window.setTimeout(() => this.props.navigation.navigate('MainNavigator'), 1500)
      return
    }

    if (!secretPhrase.startsWith(normalizedText)) {
      this.setState({ phraseInputStatus: 'error' })
      return
    }

    this.setState({ phraseInputStatus: 'none' })
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content padder contentContainerStyle={styles.contentContainer}>
          <Text style={styles.emojiHeader}>
            🤔
          </Text>
          <Title style={styles.title}>
            Confirm Your{'\n'}
            Backup Phrase
          </Title>
          <SubTitle style={styles.subtitle}>
            Enter your backup phrase to confirm you've saved it.
          </SubTitle>
          <Item
            error={isError(this.state.phraseInputStatus)}
            success={isSuccess(this.state.phraseInputStatus)}
            style={styles.phraseInputItem}
          >
            <Input
              autoCapitalize={'none'}
              autoCorrect={false}
              editable={this.state.isPhraseInputEditable}
              onChangeText={this.onPhraseInput.bind(this)}
              placeholder='enter the secret phrase'
              style={styles.phraseInput}
            />
            <InputIcon status={this.state.phraseInputStatus} />
          </Item>
          <IntroButton
            info transparent block
            onPress={() => this.props.navigation.goBack()}
          >
            😳 I forgot!
          </IntroButton>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: $white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiHeader: {
    fontSize: 48,
    marginBottom: 20,
  },
  phraseInputItem: {
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  phraseInput: {
    textAlign: 'center',
  },
  subtitle: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
})

export default PhraseConfirmView
