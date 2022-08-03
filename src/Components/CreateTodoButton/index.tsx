import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props: {setOpenModal: React.Dispatch<React.SetStateAction<boolean>>}) {
  const  onClickButton = (msg: string) => {
    props.setOpenModal(prevState => !prevState);
  };

  return(
    <button 
      className="CreateTodoButton"
      onClick={() => onClickButton('Message')}>
      
      +
      
      `</button>
  );
}

export default CreateTodoButton