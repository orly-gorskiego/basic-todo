import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
    padding: 15,
    alignItems: 'center',
  },
});

const Header = ({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
)

export default Header
