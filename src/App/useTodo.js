import React from 'react'
import { useLocalStorage } from './useLocalStorage';

function useTodo() {
  const [openModal, setOpenModal] = React.useState(false);
  const {item: todos, saveItem, loading, error} = useLocalStorage('TODOS_V1', []);
  const saveTodos = saveItem
  const [searchWord, setSearchWord] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!(searchWord.length >= 1)) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchWord.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const createTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({text: text, completed: false});
    saveTodos(newTodos);
  };

  return ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchWord,
    setSearchWord,
    searchedTodos,
    completeTodo,
    deleteTodo,
    createTodo,
    openModal,
    setOpenModal,
  })
}

export {useTodo}