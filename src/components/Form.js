import React from "react"
import './Form.css'

class Form extends React.Component {
  state = {
    enteredSequence: '',
    uniqueSequence: '',
    checkedSequences: []
  }

  getUniqueSequence = (e) => {
    this.setState((prevState) => ({
      checkedSequences: [...prevState.checkedSequences, this.state.enteredSequence],
      uniqueSequence: this._getUnuqueSequence()
    }));
  }

  handleChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      enteredSequence: value
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
        <input
          type="button"
          value="Alert the text input"
          onClick={this.getUniqueSequence}
        />
        <span className={this.state.uniqueSequence ? '' : 'hidden'}>Here is the result: {this.state.uniqueSequence}</span>
      </div>
    )
  }
}
export default Form