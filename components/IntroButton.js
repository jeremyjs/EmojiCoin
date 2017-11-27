import React from 'react'
import { Button } from 'native-base'
import { StyleSheet, Text } from 'react-native'

const IntroButton = ({ children, text, textColor, ...props }) => (
  <Button style={[styles.introButton, props.style]} {...props}>
    <Text style={[styles.introButtonText, { color: textColor }]}>
      {children || text}
    </Text>
  </Button>
)

const styles = StyleSheet.create({
  introButton: {
    height: 50,
    marginBottom: 20,
  },
  introButtonText: {
    fontSize: 20,
  },
})

export default IntroButton
