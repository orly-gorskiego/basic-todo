import React from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'papayawhip', padding: 10,
  },
  textDone: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  textUndone: {
    color: 'black',
    textDecorationLine: 'none',
  },
});

const TodoItem = ({
  id, text, done, toggleTodo,
}) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={() => toggleTodo(id)}>
      <Text style={done ? { ...styles.textDone } : { ...styles.textUndone }}>{text}</Text>
    </TouchableHighlight>
  </View>
)

export default TodoItem
