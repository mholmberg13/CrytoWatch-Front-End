import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';

<<<<<<< HEAD
let dbPORT = "3005";
let dbbaseURL = 'http://localhost:';

class App extends React.Component {
    state = { 
        currencies: [],
        login: false,
        username: "",
        password: "",
        currentUser: "",
        currentUserId: ""
    }
    
    // CLEAR USERNAME AND PASSWORD
    clearCredentials = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSignUp = () => {
        console.log(this.state.username, this.state.password);
        fetch(dbbaseURL + dbPORT + "/crypto", {
          method: "POST",
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            console.log(resJson);
            this.setState({
              currentUser: resJson.username,
            });
          })
          .catch((error) => console.error({ Error: error }));
          this.clearCredentials();
      };


    // HANDLE SIGN IN
    handleSignIn = () => {
        console.log(this.state.username, this.state.password);
        fetch(dbbaseURL + dbPORT + '/sessions', {
          method: "POST",
          // credentials: "same-origin",
          // mode: "no-cors",
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }), 
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            console.log(resJson);
            this.setState({
              currentUser: resJson.username,
              currentUserId: resJson._id,
              login: true
            });
          })
          .catch((error) => console.error({ Error: error }));
          this.clearCredentials();
    };

    handleLogOut = () => {
      fetch(dbbaseURL + dbPORT + '/sessions', {
        method: "DELETE",
        // credentials: "same-origin",
        // mode: "no-cors",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }), 
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json" 
        }
      }).then(this.setState({login: false}))
    }

    // HANDLE CHANGE
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
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
            { !this.state.login ? 
            <LandingPage 
                currencies={this.state.currencies}
                handleSignIn={this.handleSignIn}
                handleSignUp={this.handleSignUp}
                handleChange={this.handleChange}
                username={this.state.username}
                password={this.state.password}
                currentUserId={this.state.userId}
                login={this.state.login}
            /> : <Dashboard 
                    currencies={this.state.currencies}
                    currentUserId={this.state.currentUserId}
                    currentUser={this.state.currentUser}
                    login={this.state.login}
                    handleLogOut={this.handleLogOut}
                    /> }
        </div>
        )
    }
    componentDidMount() {
        this.getCurrencies();
    }
=======

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
>>>>>>> fd3fb8191e781499829ab6821709c72e263a7247
}

export default App;

