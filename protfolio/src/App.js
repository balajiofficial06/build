import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const { count, setCount } = useState(0)

function onClicked() {
  setCount(count + 1)
  console.log(count)
}

function App() {
  return (
    <div className="App">
      <h1>Hello world {count}</h1>
      <button onClick={onClicked}>click</button>
    </div>
  );
}

export default App;
