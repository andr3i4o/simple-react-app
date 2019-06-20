import { connect }  from 'react-redux'
import Form from './Form';
import { addHistoryItem, setEnteredValue } from '../../state/actions';


const mapDispatchToProps = dispatch => {
  return {
    onProcessSequence: item => {
      dispatch(addHistoryItem(item));
      dispatch(setEnteredValue(''));
    },
    enteredSequenceChange: item => {
      dispatch(setEnteredValue(item.target.value));
    }
  };
}

const mapStateToProps = state => {
  return {
    enteredSequence: state.enteredSequence
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer