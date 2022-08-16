import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
       try {const localStorageItem = localStorage.getItem(itemName);
        let parsedItem
      
        if (!localStorageItem) {
          // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // Si existen TODOs en el localStorage los regresamos como nuestros todos
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(errorMessage){
        setError(errorMessage)
      }
    }, 1000);
  }, [])

  const saveItem = (newItem) => {
    try {const stringifiedItems = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItems);
      setItem(newItem);
    } catch (errorMessage) {
      setError(errorMessage)
    }
  };

  return {item, saveItem, loading,  error};
}

export {useLocalStorage}