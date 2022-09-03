import React from 'react';
import './App.css';
import CreateTodoButton from '../Components/CreateTodoButton';
import TodoCounter from '../Components/TodoCounter';
import TodoForm from '../Components/TodoForm/TodoForm';
import TodoItem from '../Components/TodoItem';
import TodoList from '../Components/TodoList';
import TodoSearch from '../Components/TodoSearch';
import AddTodo from '../Modals/AddTodo/AddTodo';
import TodoHeader from '../TodoHeader';
import { useTodo } from './useTodo';

function App() {
  const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    createTodo,
    searchWord,
    setSearchWord,
  } = useTodo();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
      </TodoHeader>
    
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchWord}
        onError={() => <TodosError />}
        onLoading={() =><TodosLoading />}
        onEmpty={() => <EmptyTodos />}
        onNotResults={(searchWord) => <NotResults searchText={searchWord} />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => {
              if (completeTodo!=undefined) {
                completeTodo(todo.text)
              }}
            }
            onDelete={() => {
              if (deleteTodo!=undefined) {
                deleteTodo(todo.text)
              }}
            }
          />
        )}
      />

      {!!openModal && (
        <AddTodo>
          <TodoForm createTodo={createTodo} setOpenModal={setOpenModal}/>
        </AddTodo>
      )}

      <CreateTodoButton
        //setOpenModal={setOpenModal as React.Dispatch<React.SetStateAction<boolean>>}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

function TodosError() {
  return(
    <p>Error...</p>
  )
}

function TodosLoading() {
  return(
    <p>Loading...</p>
  )
}

function EmptyTodos() {
  return(
    <p>Create your first todo</p>
  )
}

function NotResults(props) {
  return(
    <p>Not results for {props.searchText}...</p>
  )
}



export default App;
