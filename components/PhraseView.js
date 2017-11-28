import React from 'react'
import { Container, Content, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { IntroButton, SubTitle, Title } from '../components'

const $white = 'white'
const $gray = '#ccc'

const PhraseView = (props) => (
  <Container style={styles.container}>
    <Content padder contentContainerStyle={styles.contentContainer}>
      <Text style={styles.emojiHeader}>
        🔑
      </Text>
      <Title style={styles.title}>
        Save Your{'\n'}
        Backup Phrase
      </Title>
      <SubTitle style={styles.subtitle}>
        Write it down and keep it somewhere safe! If you lose this, you won't be
        able to recover your wallet.
      </SubTitle>
      <Text style={styles.backupPhrase}>
        yo i got the fat weed pass phrase
      </Text>
      <IntroButton
        danger block
        textColor={$white}
        onPress={() => props.navigation.navigate('PhraseConfirmView')}
      >
        I wrote it down.
      </IntroButton>
      <IntroButton
        info transparent block
        onPress={() => props.navigation.goBack()}
      >
        Cancel
      </IntroButton>
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  backupPhrase: {
    backgroundColor: $gray,
    borderRadius: 5,
    fontSize: 24,
    marginBottom: 40,
    padding: 23,
    textAlign: 'center',
  },
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

export default PhraseView
