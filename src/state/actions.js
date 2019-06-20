import * as types from './action-types'

export  function editHistoryItem(value) {
  return {
    type: types.EDIT_HISTORY_ITEM,
    value
  };
}

export  function updateHistoryItem(value, index) {
  return {
    type: types.UPDATE_HISTORY_ITEM,
    value,
    index
  };
}

export  function addHistoryItem(value) {
  return {
    type: types.ADD_HISTORY_ITEM,
    value
  };
}

export  function setEnteredValue(value) {
  return {
    type: types.SET_ENTERED_VALUE,
    value
  };
}

export function setHistoryIndex(index) {
  return {
    type: index !== null ? types.ENABLE_EDIT_MODE : types.DISABLE_EDIT_MODE,
    index
  };
}