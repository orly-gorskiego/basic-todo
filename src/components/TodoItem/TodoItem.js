import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    margin: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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
  id, text, done, toggleTodo, removeTodo,
}) => (
    <TouchableOpacity onPress={() => toggleTodo(id)}>
      <View style={done ? { ...styles.container, ...styles.containerDone } : { ...styles.container, ...styles.containerUndone }}>
        <Text style={done ? { ...styles.textDone } : { ...styles.textUndone }}>{text}</Text>
        <TouchableHighlight onPress={() => removeTodo(id)}>
          <Icon name="remove" size={20} style={{ color: 'white' }} />
        </TouchableHighlight>
      </View>
    </TouchableOpacity>
)

export default TodoItem
