import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import LoginForm from './components/Login.js'

fetch('https://api.coinlore.net/api/tickers/')
        .then(data => {
            return data.json()},
            err => console.log(err))
            .then(parsedData => console.log(parsedData),
            err => console.log(err))

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
      </div>
    )
  }
}

export default App;

