import React, { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoCounter.css'

function TodoCounter() {
  const {completedTodos: completed, totalTodos: total} = useContext(TodoContext)
  return(
    <h2 className='TodoCounter'> Haz completado <span>{completed}</span> de {total} TODOs</h2>
  );
}

export default TodoCounter