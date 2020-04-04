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
            <div className='search-container'>
                <form onSubmit={this.handleSubmmit}>
                    <input
                        className="search"
                        type="text"
                        name="search"
                        id="name"
                        onChange={this.state.handleChange}
                        value={this.state.search}
                        placeholder="enter currency name"
                    />
                    <br/>
                    <input className="search-button" type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default SearchBox