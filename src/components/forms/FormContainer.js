import { connect }  from 'react-redux'
import Form from './Form';
import { addHistoryItem, setEnteredValue } from '../../state/actions';


const mapDispatchToProps = dispatch => {
  return {
    onAddSequence: item => {
      dispatch(addHistoryItem(item))
    },
    enteredSequenceChange: item => {
      dispatch(setEnteredValue(item.target.value))
    }
  }
}

const mapStateToProps = state => {
  return {
    enteredSequence: state.enteredSequence,
    uniqueSequence: state.uniqueSequence
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer