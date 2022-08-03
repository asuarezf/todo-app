import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../useLocalStorage';

interface IContext {
  loading: boolean,
  error: string,
  completedTodos: number,
  totalTodos: number,
  searchWord?: string,
  setSearchWord?: React.Dispatch<React.SetStateAction<string>>,
  searchedTodos?: {
    text?: string;
    completed?: boolean;
    }[],
  completeTodo?: (text: string) => void,
  deleteTodo?: (text: string) => void,
  addTodo?: (text: string) => void,
  openModal?: boolean,
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>,
}  

const defaultVal = {
  loading: true,
  error: '',
  completedTodos: 0,
  totalTodos: 0,
}

const TodoContext =  React.createContext<IContext>(defaultVal);

function TodoProvider(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const [openModal, setOpenModal] = React.useState(false);
  const {item: todos, saveItem, loading, error} = useLocalStorage('TODOS_V1', []);
  const saveTodos = saveItem as ((newItem: {
    text: string;
    completed: boolean;
  }[]) => void)
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

  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text: string) => {
    const newTodos = [...todos];
    newTodos.push({text: text, completed: false});
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchWord,
      setSearchWord,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {TodoProvider, TodoContext}