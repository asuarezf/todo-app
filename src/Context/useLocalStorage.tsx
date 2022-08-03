import React, { useEffect, useState } from "react";

function useLocalStorage(itemName: string, initialValue: any) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [item, setItem] = useState<{text: string, completed: boolean}[]>(initialValue);

  useEffect(() => {
    setTimeout(() => {
       try {const localStorageItem = localStorage.getItem(itemName);
        let parsedItem: {text: string, completed: boolean}[];
      
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
        setError(errorMessage as string)
      }
    }, 1000);
  }, [])

  const saveItem = (newItem: {text: string, completed: boolean}[]) => {
    try {const stringifiedItems = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItems);
      setItem(newItem);
    } catch (errorMessage) {
      setError(errorMessage as string)
    }
  };

  return {item, saveItem, loading,  error};
}

export {useLocalStorage}