import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='nav'>
                    <ul>
                        <li className='logo'>cryptoTracker</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                    </ul>
                </div>
                <div>
                    {/* <Route path="/" exact component={Home} />
                    <Route path="/aboutus" exact component={AboutUs} /> */}
                </div>
            </BrowserRouter>
        )
    }
}



export default Header;