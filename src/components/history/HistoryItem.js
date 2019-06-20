import React from 'react'
import PropTypes from 'prop-types'

const HistoryItem = ({ onClick, value, uniqueValue }) => (
  <tr>
    <td>{value}</td>
    <td>{uniqueValue}</td>
    <td>
      <button onClick={onClick}>EDIT</button>
    </td>
  </tr>
)

HistoryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  uniqueValue: PropTypes.string.isRequired
}

export default HistoryItem