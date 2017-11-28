import React from 'react'
import { Badge, Item, Text } from 'native-base';
import { StyleSheet } from 'react-native'

const EmojiListItem = ({ amount, emoji, ...props }) => (
  <Item {...props}>
    <Text style={styles.emojiText}>{emoji}</Text>
    <Badge><Text>{amount}</Text></Badge>
  </Item>
)

const styles = StyleSheet.create({
  emojiText: {
    fontSize: 48,
    marginRight: -2,
    marginTop: -2,
  },
})

export default EmojiListItem
