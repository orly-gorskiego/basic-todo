import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    margin: 2,
  },
  containerDone: {
    backgroundColor: 'gainsboro',
  },
  containerUndone: {
    backgroundColor: 'dodgerblue',
  },
  textDone: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  textUndone: {
    color: 'white',
    textDecorationLine: 'none',
  },
});

const TodoItem = ({
  id, text, done, toggleTodo,
}) => (
  <TouchableOpacity onPress={() => toggleTodo(id)}>
    <View style={done ? { ...styles.container, ...styles.containerDone } : { ...styles.container, ...styles.containerUndone }}>
      <Text style={done ? { ...styles.textDone } : { ...styles.textUndone }}>{text}</Text>
    </View>
  </TouchableOpacity>
)

export default TodoItem
