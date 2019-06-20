import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './HistoryItem'


const HistoryList = ({ checkedSequences, onItemClick }) => (
  <div>
    {checkedSequences.length &&
      <table>
        <thead>
          <tr>
            <th>Entered Sequence</th>
            <th>Unique Sequence</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {checkedSequences.map((item, index) => (
            <HistoryItem key={index} {...item} onClick={() => onItemClick(item, index)} />
          ))}
        </tbody>
      </table>
    }
  </div>
);

HistoryList.propTypes = {
  checkedSequences: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      uniqueValue: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default HistoryList