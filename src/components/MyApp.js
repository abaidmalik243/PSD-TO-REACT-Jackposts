import React, { Component } from "react";
import JackPosts from './jackPosts';
import PickOne from './pickOne';
import Waitlist from './waitList';
import Results from './results';
import BonusArea from './bonusArea';
import Balance from './balance';
import './style.css';

class MyApp extends Component {
    render() {
        return (
            <div className="container-fluid containerFluid">
                <div className="row">
                    <div className="col-md-4" style={{ backgroundColor: '#eeeeee' }}>
                        {/* 1st Box (JackPosts) */}
                        <JackPosts />
                        {/* 2nd Box (Pick One) */}
                        <PickOne />

                        {/* 3rd Box (Waitlist) */}
                        <Waitlist />

                        {/* 4th Box (Results) */}
                        <Results />

                        {/* 5th Box (Bonus Area) */}
                        <BonusArea />

                        {/* last Box (Balances) */}
                        <Balance />
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </div>
        );
    }
}

export default MyApp;
