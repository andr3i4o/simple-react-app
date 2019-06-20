import React from "react"
import './Form.css'

const Form = ({ enteredSequence, onProcessSequence, enteredSequenceChange, historyItemIndex }) => (
  <div>
    <input type="text" onChange={enteredSequenceChange} value={enteredSequence} />
    <button onClick={() => onProcessSequence(enteredSequence, historyItemIndex)} disabled={!enteredSequence}>Get unique sequence</button>
  </div>
  );

  export default Form