import React, { Children, cloneElement } from 'react'

export default function TodoHeader({children, loading}) {

  return (
    <header>
      {React.Children
        .toArray(children)
        .map(child => cloneElement(child, { loading }))
      }
    </header>  
  );
}
