import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem'

const HistoryList = ({ history, onItemClick }) => (
  <ul>
    {history.map((item, index) => (
      <HistoryItem key={index} {...item} onClick={() => onItemClick(index)} />
    ))}
  </ul>
)

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default HistoryList