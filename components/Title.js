import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Title = ({ children, style, ...props }) => (
  <Text style={[styles.title, style]} {...props}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Open_Sans',
    fontSize: 32,
  },
})

export default Title
