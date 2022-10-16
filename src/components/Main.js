import React, { useState } from 'react';
import Buttons from './Buttons/Buttons';
import Counter from './Counter/Counter';
import Form from './Form/Form';
import "./Main.css";

function Main() {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("");
  return (
    <div className='main'>
        <Form input={input} setInput={setInput}/>
        <Counter counter={counter}/>
        <Buttons setCounter={setCounter} input={input} counter={counter}/>
    </div>
  )
}

export default Main;