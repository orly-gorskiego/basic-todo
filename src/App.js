import React, { useState } from 'react';
import {
  View, Text, FlatList, TextInput,
} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header/Header';
import TodoItem from './components/TodoItem/TodoItem';

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
      <Header text="Todo App" />
      <TextInput
        style={{
          height: 40, width: 200, backgroundColor: 'white',
        }}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        onSubmitEditing={addTodoHandler}
      />
      <FlatList style={{ padding: 10 }} data={todos} renderItem={({ item }) => <TodoItem toggleTodo={toggleTodo} {...item} />} />
    </View>
  )
};

export default App;
