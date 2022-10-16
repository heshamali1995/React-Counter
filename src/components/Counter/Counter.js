import React from 'react';
import "./Counter.css";

function Counter({counter}) {
  return (
    <div className='counter'>
        <p>{counter}</p>
    </div>
  )
}

export default Counter;