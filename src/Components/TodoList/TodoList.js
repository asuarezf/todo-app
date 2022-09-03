import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return(
    <section className='TodoList'>
      {props.error && props.onError()} 
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onNotResults(props.searchText)}
      {props.searchedTodos.map(renderFunc)}
    </section>
    );
}

export default TodoList