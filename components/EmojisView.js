import React from 'react'
import { Badge, Body, Button, Container, Content, Icon, Image, Input, Item, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import { StyleSheet } from 'react-native'
import { IntroButton, SubTitle, Title } from '../components'
import { Col, Row, Grid } from 'react-native-easy-grid'

const Emoji = ({ amount, emoji, ...props }) => (
  <Item>
    <Text style={styles.emojiText}>{emoji}</Text>
    <Badge><Text>{amount}</Text></Badge>
  </Item>
)

const EmojiForSale = ({ amountRemaining, emoji, price }) => (
  <ListItem style={styles.emojiSaleListItem}>
    <Thumbnail square>
      <Text style={styles.emojiText}>{emoji}</Text>
    </Thumbnail>
    <Body>
      <Text>Price: {price} EMOJI</Text>
      <Text note>{amountRemaining} Remaining</Text>
    </Body>
    <Button style={styles.emojiSaleButton}>
      <Text>
        Buy
      </Text>
    </Button>
  </ListItem>
)

const navigationOptions = {
  tabBarLabel: 'Emojis',
  tabBarIcon: (props) => (<Text>💩</Text>),
}

class EmojisView extends React.Component {
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
          <Title> My Emojis 💩 </Title>
          <List style={styles.emojisList}>
            <Emoji emoji='💩' amount={1} />
            <Emoji emoji='💩' amount={1} />
            <Emoji emoji='💩' amount={1} />
            <Emoji emoji='💩' amount={1} />
            <Emoji emoji='💩' amount={1} />
            <Emoji emoji='💩' amount={1} />
            <Emoji emoji='💩' amount={1} />
          </List>

          <Title> Emoji Store 🕴️ </Title>
          <List style={styles.emojiSaleList}>
            <EmojiForSale amountRemaining={1000} emoji='💩' price={500} />
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  myEmojisItem: {
    backgroundColor: '#e7e7e7',
  },
  emojiText: {
    fontSize: 48,
    marginRight: -2,
    marginTop: -2,
  },
  emojiAmountText: {
    fontSize: 18,
  },
  emojiSaleButton: {
    marginTop: 5,
    marginRight: 3,
  },
  emojiSaleListItem: {
    backgroundColor: 'white',
    marginLeft: 0,
    paddingLeft: 14,
  },
  emojiSaleList: {
    marginTop: 20,
    marginLeft: 0,
    paddingLeft: 0,
  },
  emojisList: {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    backgroundColor: '#e7e7e7',
  },
  contentContainer: {
    backgroundColor: '#e7e7e7',
    paddingTop: 20,
  },
})

export default EmojisView
