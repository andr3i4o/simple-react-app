import React from "react"
import './Form.css'

class Form extends React.Component {
  state = {
    enteredSequence: '',
    uniqueSequence: '',
    checkedSequences: []
  }

  getUniqueSequence = () => {
    this.setState((prevState) => ({
      checkedSequences: [...prevState.checkedSequences, this.state.enteredSequence],
      uniqueSequence: this._getUnuqueSequence()
    }));
  }

  handleChange = (e) => {
    const value = e.target.value; // because setState is async we have to preserve the value

    this.setState(() => ({
      enteredSequence: value,
      uniqueSequence: '' // reset the result
    }));
  }

  _getUnuqueSequence = () => {
    return this.state.enteredSequence.split('').reduce((acc, item) => {
      // compare the current item with the last item in the collected array
      if (acc[acc.length - 1] != item) {
        // append the current item if it is different
        acc.push(item);
      }

      return acc;
    }, []).join('');
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.handleChange } />
        <button onClick={this.getUniqueSequence}>Get unique sequence</button>
        <span className={this.state.uniqueSequence ? '' : 'hidden'}>Here is the result: {this.state.uniqueSequence}</span>
      </div>
    )
  }
}
export default Form