import React from 'react';
import logo from './logo.svg';
import './App.css';


fetch('https://api.coinlore.net/api/tickers/')
        .then(data => {
            return data.json()},
            err => console.log(err))
            .then(parsedData => console.log(parsedData),
            err => console.log(err))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
