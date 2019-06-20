import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem'


const HistoryList = ({ checkedSequences, onItemClick }) => (
  <div>
    <ul>
      {checkedSequences.map((item, index) => (
        <HistoryItem key={index} {...item} onClick={() => onItemClick(item, index)} />
      ))}
    </ul>

  </div>
)

HistoryList.propTypes = {
  checkedSequences: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      uniqueValue: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default HistoryList