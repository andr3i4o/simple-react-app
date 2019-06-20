import React from 'react';
import logo from './logo.svg';
import HistoryContainer from './components/history/HistoryContainer';
import FormContainer from './components/forms/FormContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FormContainer />
      <HistoryContainer />
    </div>
  );
}

export default App;
