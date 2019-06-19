import React from 'react'
import PropTypes from 'prop-types'

const HistoryItem = ({ onClick, value }) => (
  <li
    onClick={onClick}
  >
    {value}
  </li>
)

HistoryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default HistoryItem