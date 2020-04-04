import React from 'react'

class LoginForm extends React.Component {
    state = {
        login: false,
        username: "",
        password: ""
    }

    // HANDLE SUBMIT
    handleSubmit = event => {
        event.preventDefault();
        fetch(this.props.baseURL + "/", {

        })
    }

    // HANDLE CHANGE
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        onChange={this.handleChange}
                        value={this.state.loginUsername}
                        placeholder="username"
                    />
                    <input 
                        type="text"
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                        value={this.state.loginInPassword}
                        placeholder="password"
                    />
                    <input type="submit" value="Login/Register" />
                </form>
                <div className="login-options">
                    <button className="login" onClick={() => this.setState.login = true}>Login</button>
                    <button className="register" onClick={() => this.setState.login = false}>Register</button>
                </div>
            </div>
        )
    }
}

export default LoginForm

