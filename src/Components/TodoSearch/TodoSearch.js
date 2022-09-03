import './TodoSearch.css'

function TodoSearch({searchWord, setSearchWord, loading}) {

  const onSearchValueChange = (event) => {
    if(setSearchWord !== undefined){
      setSearchWord(event.target.value)
    }
  }

  return(
    <input 
      className='TodoSearch'
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={searchWord} 
      disabled={loading}
      />
  );
}

export default TodoSearch