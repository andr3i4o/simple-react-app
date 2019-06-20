import { connect }  from 'react-redux'
import HistoryList from './History';
import { editHistoryItem, setHistoryIndex } from '../../state/actions';


const mapDispatchToProps = dispatch => {
  return {
    onItemClick: (item, index) => {
      dispatch(editHistoryItem(item.value));
      dispatch(setHistoryIndex(index));
    }
  }
}

const mapStateToProps = state => {
  return {checkedSequences: state.checkedSequences}
}

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryList)

export default HistoryContainer