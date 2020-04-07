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
                    <div className='content-container'>
                        <div className="top-content">
                            <SearchBox currencies={this.props.currencies}/>
                            <LoginForm />
                        </div>
                        <div className="bottom-content">
                            <TopTen />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default LandingPage;