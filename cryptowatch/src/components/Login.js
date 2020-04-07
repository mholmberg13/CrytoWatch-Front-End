import React from 'react'

let dbPORT = "3005";
let dbbaseURL = 'http://localhost:';

class LoginForm extends React.Component {
    state = {
        login: true,
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
          credentials: "same-origin",
          //mode: "no-cors",
          body: JSON.stringify({
            username: 'shoran234',
            password: 'password3',
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

    render() {

        console.log(this.state.currentUserId)

        return (
            <div>
                <form >
                    <h3>Login</h3>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        placeholder="username"
                    />
                    <input 
                        type="text"
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="password"
                    />
                </form>
                <div className="login-options">
                    <button className="login" onClick={() => this.handleSignIn()}>Login</button>
                    <button className="register" onClick={() => this.handleSignUp(false)}>Register</button>
                </div>
            </div>
        )
    }
}

export default LoginForm

