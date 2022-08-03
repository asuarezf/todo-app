import React, { useContext } from "react";
import {TodoContext} from "../Context/TodoContext"
import CreateTodoButton from "../Components/CreateTodoButton";
import TodoCounter from "../Components/TodoCounter";
import TodoItem from "../Components/TodoItem";
import TodoList from "../Components/TodoList";
import TodoSearch from "../Components/TodoSearch";
import { AddTodo } from "../Modals";
import TodoForm from "../Components/TodoForm/TodoForm";

function AppUI() { 
  const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Error...</p>}
        {loading && <p>Loading...</p>}
        {(!loading && !searchedTodos?.length) && <p>Create your first TODO!</p>}
        
        {searchedTodos?.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text as string}
            completed={todo.completed as boolean}
            onCompleted={() => {
              if (completeTodo!=undefined) {
                completeTodo(todo.text as string)
              }}
            }
            onDelete={() => {
              if (deleteTodo!=undefined) {
                deleteTodo(todo.text as string)
              }}
            }
          />
        ))}
      </TodoList>

      
      {!!openModal && (
        <AddTodo>
          <TodoForm/>
        </AddTodo>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal as React.Dispatch<React.SetStateAction<boolean>>}
      />
    </React.Fragment>
  );
}

export {AppUI}