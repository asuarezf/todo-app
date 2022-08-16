import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const  onClickButton = (msg) => {
    props.setOpenModal(prevState => !prevState);
  };

  return(
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('Message')}>
      
      +
      S
      `</button>
  );
}

export default CreateTodoButton