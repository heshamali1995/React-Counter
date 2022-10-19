import { useState } from "react";
import "./Counter.css";
import Form from "./Form/Form";
import Buttons from "./Buttons/Buttons";


function Counter() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  return (
    <div className='counter py-5 text-center'>
        <p className="counter-number">{counter}</p>
        <Form input={input} setInput={setInput}/>
        <Buttons setCounter={setCounter} input={input} counter={counter}/>
    </div>
  )
}

export default Counter;