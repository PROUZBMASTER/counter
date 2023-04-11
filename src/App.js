import React, { useState } from 'react';
 import './index.css';
function App() {
  const [count, setCount] = useState(0)
  function increment (){
    setCount(count +1)
  }
  function decrement (){
    setCount(count -1)
  }
  function rest (){
    setCount(0)
  }
  return (
    <div className='box'>
      <h1 className='num'>{count}</h1>
      <div className='box2'>
      <button className='btn1' onClick={increment}>+</button>
      <button className='btn3'onClick={rest}>restart</button>
      <button className='btn2' onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
