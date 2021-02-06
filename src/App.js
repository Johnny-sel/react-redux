import React from 'react';
import { Counter } from './app/components/Counter/Counter';
import './App.sass';
import Spinner from './app/components/Others/Spinner/Spinner';

function App() {
  return (
    <div className="App">
      <Counter />
      <button>Пример</button>
    </div>
  );
}

export default App;
