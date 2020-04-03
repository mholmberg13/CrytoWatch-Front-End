import React from 'react'

class Currency extends React.Component {
    render() {
        return (
            <div>
                <div className="currency">
                    <div className="rank">{this.props.rank}</div>
                    <div className="name">{this.props.name}</div>
                    <div className="price">{this.props.price}</div>
                    <div className="controls">
                        <button className="view-btn" onClick={this.props.viewFunc}>View</button>
                        <button className="favorites-btn" onClick={this.props.addFunc}>Add to Favorites</button>
                    </div>
                </div>
            </div>
        )
    }
} 

class TopTen extends React.Component {
    state = {
        currencies: [],
        currentCurrency: 0
    }

    // HANDLE VIEW CURRENCY
    handleViewCurrency = event => {
        event.preventDefault();
    }

    // HANDLE ADD TO FAVORITES
    handdleAddToFavorties = event => {
        event.preventDefault();
    }

    // HANDLE FETCH RESULTS
    getTopTenCurrencies = () => {
        fetch("https://api.coinlore.net/api/tickers/?start=0&limit=10")
            .then(data = data.json(), err => console.log(err))
            .then(parsedData => 
                this.setState({currencies: parsedData}), err => console.log('parsedData'), err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.currencies.map(currency => (
                    <Currency 
                        rank={currency.rank}
                        name={currency.name}
                        price={currency.price}
                    />
                ))}
            </div>
        )
    }
    componentDidMount() {
        this.getTopTenCurrencies() 
    }
}

export default TopTen