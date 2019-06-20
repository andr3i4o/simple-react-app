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
            value: historyItem.value,
            uniqueValue: uniqueSequenceCalculator(historyItem.item)
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
    case types.EDIT_HISTORY_ITEM:
      return action.value;
    default:
      return state;
  }
}


const uniqueSequenceApp = combineReducers({
  enteredSequence,
  checkedSequences
});

export default uniqueSequenceApp;