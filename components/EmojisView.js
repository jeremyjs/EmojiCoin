import React from 'react'
import { Container, Content, List, Text, View } from 'native-base';
import { ScrollView, StyleSheet } from 'react-native'
import { EmojiListItem, EmojiForSaleListItem, Title } from '../components'

const $lightGray = '#e7e7e7'

const sendViewTitle = 'Emojis'
const sendViewEmoji = '💩'

const navigationOptions = {
  tabBarLabel: sendViewTitle,
  tabBarIcon: (props) => (<Text {...props}>{sendViewEmoji}</Text>),
}

class EmojisView extends React.Component {
  static navigationOptions = navigationOptions

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content padder contentContainerStyle={styles.contentContainer}>
          <Title> My Emojis 💩 </Title>
          <List style={styles.emojisList}>
            <EmojiListItem emoji='💩' amount={1} />
            <EmojiListItem emoji='💩' amount={1} />
            <EmojiListItem emoji='💩' amount={1} />
            <EmojiListItem emoji='💩' amount={1} />
            <EmojiListItem emoji='💩' amount={1} />
            <EmojiListItem emoji='💩' amount={1} />
            <EmojiListItem emoji='💩' amount={1} />
          </List>

          <Title> Emoji Store 🕴️ </Title>
          <List style={styles.emojiSaleList}>
            <EmojiForSaleListItem amountRemaining={1000} emoji='💩' price={500} />
            <EmojiForSaleListItem amountRemaining={1000} emoji='💩' price={500} />
            <EmojiForSaleListItem amountRemaining={1000} emoji='💩' price={500} />
            <EmojiForSaleListItem amountRemaining={1000} emoji='💩' price={500} />
            <EmojiForSaleListItem amountRemaining={1000} emoji='💩' price={500} />
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  emojiSaleList: {
    marginBottom: 20,
    marginLeft: 0,
    marginTop: 20,
    paddingLeft: 0,
  },
  emojisList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 40,
    marginTop: 20,
  },
  container: {
    backgroundColor: $lightGray,
  },
  contentContainer: {
    backgroundColor: $lightGray,
    paddingTop: 20,
  },
})

export default EmojisView
