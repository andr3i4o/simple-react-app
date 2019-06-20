import React from "react"
import './Form.css'
import PropTypes from 'prop-types'

const Form = ({ enteredSequence, onProcessSequence, enteredSequenceChange, historyItemIndex }) => (
  <div>
    <input type="text" onChange={enteredSequenceChange} value={enteredSequence} />
    <button onClick={() => onProcessSequence(enteredSequence, historyItemIndex)} disabled={!enteredSequence}>
      { historyItemIndex !== null ? 'Edit the sequence': 'Get unique sequence'}
      </button>
  </div>
  );

  Form.propTypes = {
    enteredSequenceChange: PropTypes.func.isRequired,
    onProcessSequence: PropTypes.func.isRequired,
    enteredSequence: PropTypes.string.isRequired,
    historyItemIndex: PropTypes.number
  }

  export default Form