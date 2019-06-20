import { connect }  from 'react-redux'
import HistoryList from './History';
import { editHistoryItem } from '../../state/actions';


const mapDispatchToProps = dispatch => {
  return {
    onItemClick: item => {
      dispatch(editHistoryItem(item.value))
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