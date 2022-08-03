import React, { useContext, useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoSearch.css'

function TodoSearch() {

  const {searchWord, setSearchWord}  = useContext(TodoContext)

  const onSearchValueChange = (event: any) => {
    if(setSearchWord!=undefined){
      setSearchWord(event.target.value)
    }
  }

  return(
    <input 
      className='TodoSearch'
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={searchWord} />
  );
}

export default TodoSearch