import { combineReducers } from 'redux'
import * as types from './action-types'
import uniqueSequenceCalculator from '../utils/uniqueSequence';

function checkedSequences(state = [], action) {
  switch (action.type) {
    case types.ADD_HISTORY_ITEM:
      return [
        ...state,
        {
          value: action.item,
          uniqueValue: uniqueSequenceCalculator(action.item)
        }
      ];
    case types.UPDATE_HISTORY_ITEM:
      return state.map((historyItem, index) => {
        if (index === action.index) {
          return Object.assign({}, historyItem, {
            value: historyItem.historyItem
          });
        }
        return historyItem;
      });
    default:
      return state;
  }
}

function enteredSequence(state = '' , action) {
  switch (action.type) {
    case types.SET_ENTERED_VALUE:
      return action.value;
    default:
      return state;
  }
}

function uniqueSequence(state = '' , action) {
  switch (action.type) {
    case types.SET_UNIQUE_SEQUENCE:
      return action.value;
    default:
      return state;
  }
}


const uniqueSequenceApp = combineReducers({
  enteredSequence,
  checkedSequences,
  uniqueSequence
});

export default uniqueSequenceApp;