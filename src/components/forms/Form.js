import React from "react"
import './Form.css'

const Form = ({ enteredSequence, uniqueSequence, onAddSequence, enteredSequenceChange }) => (
  <div>
    <input type="text" onChange={enteredSequenceChange} value={enteredSequence} />
    <button onClick={() => onAddSequence(enteredSequence)}>Get unique sequence</button>
    <span className={uniqueSequence ? '' : 'hidden'}>Here is the result: {uniqueSequence}</span>
  </div>
  );

  export default Form