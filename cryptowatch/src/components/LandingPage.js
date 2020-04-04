import React from 'react';
import Header from './header.js';
import LoginForm from './Login.js';
import SearchBox from './SearchBox.js';
import TopTen from './TopTen.js';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="landing-container">
                    <Header />
                    <SearchBox />
                    <TopTen />
                    <LoginForm />
                </div>
            </div>
        )
    }

};

export default LandingPage;