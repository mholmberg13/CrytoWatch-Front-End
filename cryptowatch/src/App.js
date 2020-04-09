import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js';

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
            /> : <Dashboard 
                    currentUserId={this.state.currentUserId}
                    /> }
        </div>
        )
    }
    componentDidMount() {
        this.getCurrencies();
    }
}

export default App;

