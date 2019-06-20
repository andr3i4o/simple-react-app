import React from 'react'
import PropTypes from 'prop-types'

const HistoryItem = ({ onClick, value, uniqueValue }) => (
  <li>
    <div>Entered Sequence: {value}</div>
    <div>Unique Sequence: {uniqueValue}</div>
    <button onClick={onClick}>EDIT</button>
  </li>
)

HistoryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  uniqueValue: PropTypes.string.isRequired
}

export default HistoryItem