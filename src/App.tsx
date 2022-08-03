import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppUI } from './App/AppUI';
import { stringify } from 'querystring';
import { TodoProvider } from './Context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
