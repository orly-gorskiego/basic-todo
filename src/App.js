import React, { useState } from 'react';
import {
  View, FlatList, TextInput, StyleSheet,
} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header/Header';
import TodoItem from './components/TodoItem/TodoItem';
import { sortByDone } from './helpers';

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  content: {
    padding: 10,
  },
  input: {
    height: 60,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gainsboro',
  },
  list: {
    paddingHorizontal: 30,
  },
});

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodoHandler = () => {
    const newTodos = [
      ...todos,
      {
        id: uuid(),
        text: inputValue,
        done: false,
      },
    ];

    const sortedTodos = newTodos.sort(sortByDone)

    setTodos(sortedTodos)
    setInputValue('')
  }

  const toggleTodo = (id) => {
    const todo = todos.find((el) => el.id === id)
    const filteredTodos = todos.filter((el) => el.id !== id)

    const updatedTodo = {
      ...todo,
      done: !todo.done,
    };

    const newTodos = todo.done ? [updatedTodo, ...filteredTodos] : [...filteredTodos, updatedTodo]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((el) => el.id !== id)

    setTodos(filteredTodos)
  }

  return (
    <View style={styles.container}>
      <Header text="Todo App" />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        onSubmitEditing={addTodoHandler}
        placeholder="Add todo"
      />
      <View style={styles.content}>
        <FlatList style={styles.list} data={todos} renderItem={({ item }) => <TodoItem removeTodo={removeTodo} toggleTodo={toggleTodo} {...item} />} />
      </View>
    </View>
  )
};

export default App;
