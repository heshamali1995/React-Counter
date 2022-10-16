import React from 'react';
import "./Buttons.css";

function Buttons({setCounter, input, counter}) {
  return (
    <div className='buttons'>
        <button className={isNaN(input) || input == 0 ? "disabled" : "enabled"} onClick={() => setCounter((prev) => prev + parseInt(input))}>Increase Counter</button>
        <button className={isNaN(input) || input == 0 ? "disabled" : "enabled"} onClick={counter <= 0 || input > counter ? () => setCounter(0) : () => setCounter((prev) => prev - parseInt(input))}>Decrease Counter</button>
    </div>
  )
}

export default Buttons;