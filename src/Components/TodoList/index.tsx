import React from 'react';
import './TodoList.css'

function TodoList(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return(
    <section className='TodoList'>
      <ul>
        {props.children}
      </ul>
    </section>
    );
}

export default TodoList