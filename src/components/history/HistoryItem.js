import React from 'react'
import PropTypes from 'prop-types'

const HistoryItem = ({ onClick, value, uniqueValue }) => (
  <li onClick={onClick}>
    <div>Entered Sequence: {value}</div>
    <div>Unique Sequence: {uniqueValue}</div>
  </li>
)

HistoryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  uniqueValue: PropTypes.string.isRequired
}

export default HistoryItem