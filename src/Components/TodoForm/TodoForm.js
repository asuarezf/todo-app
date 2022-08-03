import React, { useContext, useState } from 'react'
import { TodoContext } from '../../Context/TodoContext'
import './TodoForm.css'

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('')

  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext)
  
  const onCancel = () => {
    setOpenModal(prevState => !prevState)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo)
    setOpenModal(prevState => !prevState)
  }

  const onChange = (event) => {
    setNewTodo(event.target.value)
  }


  return (
    <form onSubmit={onSubmit}>
      <label>Add a new ToDo</label>
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder='Cortar la cebolla para el almuerzo'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          className='TodoForm-button TodoForm-button--cancel'
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className='TodoForm-button TodoForm-button--add'
          type='submit' 
        >
          Add
        </button>
      </div>
    </form>
  )
}
