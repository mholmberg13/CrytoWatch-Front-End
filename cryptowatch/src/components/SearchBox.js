import React from 'react'

let currencyList = [];
let dbPORT = "3005";
let dbbaseURL = 'http://localhost:';
let tempUserId = '5e85279aea824c0d018594f7'

class ShowResults extends React.Component {

    // GET FAVORITES FROM DATABASE
    addToFavorites = (id) => {
        fetch(dbbaseURL + dbPORT + '/crypto/' + tempUserId)      // need to get id from authentication
            .then(data => data.json(), err => console.log(err))
            .then(parsedData => {
                console.log('parsedData',parsedData);
                this.setState({copyUsername: parsedData.username});
                this.setState({copyPassword: parsedData.password});
                this.setState({copyCurrencyIds: parsedData.currencyIds})
                console.log(this.state.copyUsername)
                console.log(this.state.copyPassword)
                console.log(this.state.copyCurrencyIds)
                this.state.copyCurrencyIds.unshift(id)
                console.log(this.state.copyCurrencyIds)
            }) 
        fetch(dbbaseURL + dbPORT + '/crypto/' + tempUserId, {
            method: 'PUT',
            body: JSON.stringify({currencyIds: this.state.copyCurrencyIds}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(resJson => {
            console.log('response: ',resJson);
        })



    }

    render () {
        return (
            <div className="search-results">
                <h3>{this.props.label}</h3>
                <h4><span>Name: </span>{this.props.name}</h4>
                <h5><span>Rank: </span>{this.props.rank}</h5>
                <h5><span>Price: </span>{this.props.price}</h5>
                <h5><span>Symbol: </span>{this.props.symbol}</h5>
                <button onClick={() => this.addToFavorites(this.props.id)}>Add to favorites</button>
            </div>
        )
    }
}

class SearchBox extends React.Component {
    state = {
        search: "",
        currencies: [],
        searchResults: [],
        copyUsername: "",
        copyPassword: "",
        copyCurrencyIds: []
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
                    id={this.state.searchResults.id}
                />
            </div>
        )
    }    
}

export default SearchBox