import React from 'react'

let currencyList = [];

class ShowResults extends React.Component {

    addToFavorites = (event) => {
        event.preventDefault();
        // This is where the user would hit the route to post the id to the data base
        
    }

    render () {
        return (
            <div className="search-results">
                <h3>{this.props.label}</h3>
                <h4><span>Name: </span>{this.props.name}</h4>
                <h5><span>Rank: </span>{this.props.rank}</h5>
                <h5><span>Price: </span>{this.props.price}</h5>
                <h5><span>Symbol: </span>{this.props.symbol}</h5>
                <form onSubmit={this.addToFavorites}>
                    <input type="submit" value="Add to favorites"/>
                </form>
            </div>
        )
    }
}

class SearchBox extends React.Component {
    state = {
        search: "",
        currencies: [],
        searchResults: []
    }

    // SET STATE CURRENCIES
    setIncomingStates = (currencyList) => {
        this.setState({currencies: currencyList})
    }

    // HANDLE SUBMIT
    handleSubmit = event => {
        event.preventDefault();
        for(let i=0;i<currencyList.length;i++){
            if(currencyList[i].name === this.state.search){
                this.setState({searchResults: currencyList[i]})
                this.setState({search: ""})
                console.log('Search Results:',this.state.searchResults)
            }
        }
    }

    // HANDLE CHANGE
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    // CLEAR SEARCH
    clearSearch = () => {
        this.setState({searchResults: []})
        this.setState({search: ""})
        console.log(this.state.searchResults)
    }


    render() {
        currencyList = this.props.currencies;
        return (
            <div className='search-container'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="search"
                        type="text"
                        name="search"
                        id="search"
                        onChange={this.handleChange}
                        value={this.state.search}
                        placeholder="enter currency name"
                    />
                    <br/>
                    <input className="search-button" type="submit" value="Search Currencies"/>
                </form>
                <button onClick={()=> this.clearSearch()}>Clear Search</button>
                <ShowResults 
                    label="Search Results"
                    name={this.state.searchResults.name}
                    rank={this.state.searchResults.rank}
                    price={this.state.searchResults.price_usd}
                    symbol={this.state.searchResults.symbol}
                />
            </div>
        )
    }    
}

export default SearchBox