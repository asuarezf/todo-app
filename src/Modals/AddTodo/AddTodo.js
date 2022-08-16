import ReactDOM from "react-dom";
import './AddTodo.css'

export default function AddTodo({children}) {

  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')  
  );
}
