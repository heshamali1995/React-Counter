import "./Form.css";

function Form({input, setInput}) {
  return (
    <div className='form'>
        <input type="text" autoFocus placeholder='Counter Number' value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default Form;