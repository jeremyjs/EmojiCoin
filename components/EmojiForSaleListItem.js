import React from 'react'
import { Body, Button, ListItem, Text, Thumbnail } from 'native-base';
import { StyleSheet } from 'react-native'

const $white = 'white'

const EmojiForSaleListItem = ({ amountRemaining, emoji, price }) => (
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

const styles = StyleSheet.create({
  emojiText: {
    fontSize: 48,
    marginRight: -2,
    marginTop: -2,
  },
  emojiSaleButton: {
    marginTop: 5,
    marginRight: 3,
  },
  emojiSaleListItem: {
    backgroundColor: $white,
    marginLeft: 0,
    paddingLeft: 14,
  },
})

export default EmojiForSaleListItem
