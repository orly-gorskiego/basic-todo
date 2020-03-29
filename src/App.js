import React, { useState } from 'react';
import {
  View, FlatList, TextInput, StyleSheet,
} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header/Header';
import TodoItem from './components/TodoItem/TodoItem';

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    padding: 10,
  },
  list: {
    padding: 10,
  },
});

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodoHandler = () => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        text: inputValue,
        done: false,
      },
    ])

    setInputValue('')
  }

  const toggleTodo = (id) => {
    const taskIndex = todos.findIndex((todo) => todo.id === id)
    const task = [...todos][taskIndex]

    const updatedTask = {
      ...task,
      done: !task.done,
    };

    const newTodos = replaceAt([...todos], taskIndex, updatedTask);
    setTodos(newTodos)
  }

  return (
    <View style={styles.container}>
      <Header text="Todo App" />
      <View style={styles.content}>
      <TextInput
          style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        onSubmitEditing={addTodoHandler}
          placeholder="Add todo"
      />
        <FlatList style={styles.list} data={todos} renderItem={({ item }) => <TodoItem toggleTodo={toggleTodo} {...item} />} />
      </View>
    </View>
  )
};

export default App;
