import { connect }  from 'react-redux'
import Form from './Form';
import { addHistoryItem, setEnteredValue, setHistoryIndex, updateHistoryItem } from '../../state/actions';


const mapDispatchToProps = (dispatch) => {
  return {
    onProcessSequence: (value, historyItemIndex) => {
      historyItemIndex !== null ?  dispatch(updateHistoryItem(value, historyItemIndex)) : dispatch(addHistoryItem(value));
      dispatch(setEnteredValue(''));
      dispatch(setHistoryIndex(null));
    },
    enteredSequenceChange: item => {
      dispatch(setEnteredValue(item.target.value));
    }
  };
};

const mapStateToProps = state => {
  return {
    enteredSequence: state.enteredSequence,
    historyItemIndex: state.historyItemIndex
  };
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer