import './TodoSearch.css'

function TodoSearch(props) {

  const onSearchValueChange = (event) => {
    if(props.setSearchWord !== undefined){
      props.setSearchWord(event.target.value)
    }
  }

  return(
    <input 
      className='TodoSearch'
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={props.searchWord} />
  );
}

export default TodoSearch