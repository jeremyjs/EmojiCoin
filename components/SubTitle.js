import React from 'react'
import { StyleSheet, Text } from 'react-native'

const SubTitle = (props) => (
  <Text style={[styles.subTitle, props.style]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: 'Open_Sans_Light',
    fontSize: 18,
    marginBottom: 40,
  },
})

export default SubTitle
