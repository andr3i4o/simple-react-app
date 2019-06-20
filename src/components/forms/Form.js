import React from "react"
import './Form.css'

const Form = ({ enteredSequence, onProcessSequence, enteredSequenceChange }) => (
  <div>
    <input type="text" onChange={enteredSequenceChange} value={enteredSequence} />
    <button onClick={() => onProcessSequence(enteredSequence)} disabled={!enteredSequence}>Get unique sequence</button>
  </div>
  );

  export default Form