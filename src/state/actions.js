import * as types from './action-types'

export  function editHistoryItem(index) {
  return {
    type: types.EDIT_HISTORY_ITEM,
    index
  }
}

export  function updateHistoryItem(item) {
  return {
    type: types.UPDATE_HISTORY_ITEM,
    item
  }
}

export  function addHistoryItem(item) {
  return {
    type: types.ADD_HISTORY_ITEM,
    item
  }
}

export  function setEnteredValue(value) {
  return {
    type: types.SET_ENTERED_VALUE,
    value
  }
}