import React from 'react'

class SearchBox extends React.Component {
    state = {
        search: ""
    }

    // HANDLE SUBMIT
    handleSubmit = event => {
        event.preventDefault();
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
                <form onSubmit={this.handleSubmmit}>
                    <h3>Search Crypto Currencies</h3>
                    <input 
                        type="text"
                        name="search"
                        id="name"
                        onChange={this.state.handleChange}
                        value={this.state.search}
                        placeholder="enter currency name"
                    />
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }

}