import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import LoginForm from './components/Login.js'
import TopTen from './components/TopTen.js'
import SearchBox from './components/SearchBox.js'
import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';

class App extends React.Component {
    state = { 
        currencies: []
    }

    getCurrencies = () => {
        fetch('https://api.coinlore.net/api/tickers/')
            .then(data => data.json(), err => console.log(err))
            .then(parsedData => {
                console.log(parsedData)
                this.setState({currencies: parsedData.data})
            })
    }
    render() {


        return (
        <div>
            <LandingPage currencies={this.state.currencies}/>
        </div>
        )
    }
    componentDidMount() {
        this.getCurrencies();
    }
}

export default App;

