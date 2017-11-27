import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Subtle = (props) => (
  <Text style={[styles.subtle, props.style]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  subtle: {
    fontFamily: 'Open_Sans_Light',
  },
})

export default Subtle
