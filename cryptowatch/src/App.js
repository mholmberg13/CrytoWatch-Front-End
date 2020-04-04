import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import LoginForm from './components/Login.js'
import TopTen from './components/TopTen.js'
import SearchBox from './components/SearchBox.js'
import LandingPage from './components/LandingPage';

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
        <LandingPage />
      </div>
    )
  }
}

export default App;

