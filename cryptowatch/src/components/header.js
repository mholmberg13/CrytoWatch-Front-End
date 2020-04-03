import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='nav'>
                    <div className='left-side'>
                        <p>cryptoWatch</p>
                    </div>
                    <div className='right-side'>
                        <Link to="/">Home</Link>
                        <Link to="/aboutus">About Us</Link>
                    </div>
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