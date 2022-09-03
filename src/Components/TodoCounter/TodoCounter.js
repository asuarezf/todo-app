import React from 'react';
import './TodoCounter.css'

function TodoCounter({completedTodos, totalTodos, loading}) {

  return(
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}> Haz completado <span>{completedTodos}</span> de {totalTodos} TODOs</h2>
  );
}

export default TodoCounter