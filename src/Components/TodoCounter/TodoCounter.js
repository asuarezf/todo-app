import React from 'react';
import './TodoCounter.css'

function TodoCounter(props) {

  return(
    <h2 className='TodoCounter'> Haz completado <span>{props.completedTodos}</span> de {props.totalTodos} TODOs</h2>
  );
}

export default TodoCounter