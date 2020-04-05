import React from 'react'
import ZingChart from 'zingchart-react';

let dbPORT = "3005";
let dbbaseURL = 'http://localhost:';
let apiIdSearchBaseURL = 'https://api.coinlore.net/api/ticker/?id='

// LIST ITEM COMPONENT
class ListItem extends React.Component {
    render () {
        return (
            <div className="list-item" onClick={() => this.props.func(this.props.index)}>
                <h3>{this.props.name}</h3>
                <h3>{this.props.symbol}</h3>
            </div>
        )
    }
}

// BARGRAPH COMPONENT
class Bargraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        config: {
          type: 'bar',
          series: [{
            values: this.props.prices
          }],
          "scale-x": {values: this.props.symbols}
        }
      }
    }
    render() {
        return (
            <div>
                <ZingChart data={this.state.config} />
            </div>
        );
    }
  }

// FAVORITES LIST COMPONENT
class Dashboard extends React.Component {
    state = {
        userId: '5e85279aea824c0d018594f7',
        idArr: [],
        favorites: [],
        selectIndex: 0,
        chartSymbols: [],
        chartPrices: []
    }

    // HANDLE CREATE FAVORITES LIST
    handleCreateFavoritesList = (favorite) => {
        // get incoming values
        let favoriteVal = favorite[0];
        let priceVal = Number(favorite[0].price_usd); 
        let symbolVal = favorite[0].symbol;
        // copy state arrays
        const copyFavorites = [...this.state.favorites]
        const copyChartPrices = [...this.state.chartPrices]
        const copyChartSymbols = [...this.state.chartSymbols]
        // add value to the copied array
        copyFavorites.unshift(favoriteVal)
        copyChartPrices.unshift(priceVal)
        copyChartSymbols.unshift(symbolVal)
        // set new states
        this.setState({
            favorites: copyFavorites
        })
        this.setState({
            chartPrices: copyChartPrices
        })
        this.setState({
            chartSymbols: copyChartSymbols
        })
    }

    // GET FAVORITES FROM API
    getFavoritesFromApi = (idArr) => {
        for(let i=0;i<idArr.length;i++){
            fetch(apiIdSearchBaseURL + idArr[i])
                .then(data => data.json(), err => console.log(err))
                .then(parsedData => {
                    this.handleCreateFavoritesList(parsedData);
                })
        }
    }
    
    // GET FAVORITES FROM DATABASE
    getFavoritesList = () => {
        fetch(dbbaseURL + dbPORT + '/crypto/' + this.state.userId)      // need to get id from authentication
            .then(data => data.json(), err => console.log(err))
            .then(parsedData => {
                this.getFavoritesFromApi(parsedData.currencyIds)
                this.setState({idArr: parsedData.currencyIds})
            })
    }

    // SHOW DATA FROM FAVORITES LIST
    showData = index => {
        this.setState({selectIndex: index});
    }

    render () {
        let name = "";
        let rank = "";
        let price = "";
        let symbol = "";
        let idLength = this.state.idArr.length;
        let pricesLength = this.state.chartPrices.length;
        let symbolsLength = this.state.chartSymbols.length;
        let bargraph;

        // DISPLAY CONDITIONALS
        if((pricesLength > 0)&&(pricesLength === idLength)){
            if(symbolsLength === idLength){
                console.log('chartSymbols: ',this.state.chartSymbols)
                console.log('chartPrices:', this.state.chartPrices)
                name = this.state.favorites[this.state.selectIndex].name;
                rank = this.state.favorites[this.state.selectIndex].rank;
                price = this.state.favorites[this.state.selectIndex].price_usd;
                symbol = this.state.favorites[this.state.selectIndex].symbol;
                bargraph = <Bargraph prices={this.state.chartPrices} symbols={this.state.chartSymbols} />
            }
        } else {
            name = "Retrieving..."
            rank = "Retrieving..."
            price = "Retrieving..."
            symbol = "Retrieving..."
            bargraph = <div>Rendering Bargraph</div>
        }
        return (
            <div>
                <div className="display">
                    <h3>Crypto Currency Info:</h3>
                    <h4>{name}</h4>
                    <h5><span>Rank: </span>{rank}</h5>
                    <h5><span>Price: </span>{price}</h5>
                    <h5><span>Symbol: </span>{symbol}</h5>
                </div>
                <div className="favorites-list">
                    {this.state.favorites.map((favorite,index)=> (
                        <ListItem
                            key={favorite.id}
                            name={favorite.name}
                            symbol={favorite.symbol}
                            index={index}
                            func={this.showData}
                        />
                    ))}
                </div>
                <div className="bargraph">
                        {bargraph}
                </div>
            </div>
        )
    } 
    componentDidMount() {
        this.getFavoritesList();
    }
}
export default Dashboard