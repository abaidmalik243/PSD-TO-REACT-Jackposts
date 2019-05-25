import React, { Component } from "react";
import { connect } from 'react-redux';
import pickOne from '../img/pickOne.png';
import leftGun from '../img/leftGun.png'
import leftGunBox from '../img/leftGunBox.png'
import middleGunBox from '../img/middleGunBox.png'
import middleGun from '../img/missGun.png'
import rightGunBox from '../img/rightGunBox.png'
import rightGun from '../img/rightGun.png'
import './style.css';

class PickOne extends Component {

    leftGunBox = () => {
        console.log('Console => Left Gun Box');
    }
    middleMissBox = () => {
        console.log('Console => Middle Miss Box')
    }
    rightGunBox = () => {
        console.log('Console => Right Gun Box');
    }

    render() {
        return (
            // 2nd Box (Pick One)
            <div className="row" style={{ padding: '30px' }}>
                <div className="jackpost">
                    <img src={pickOne} width="60%" /><span className="jackpostTxt">Pick One</span>
                </div>
                <div className="col-md-12 jackpostBody">
                    <div className="row">
                        <div className="col-md-4 leftGunSection" onClick={this.leftGunBox}>
                            <img src={leftGunBox} width="100%" />
                            <div className="leftGun"><img src={leftGun} width="40%" /><br /><strong>Left</strong></div>
                        </div>
                        <div className="col-md-4 leftGunSection" onClick={this.middleMissBox}>
                            <img src={middleGunBox} width="100%" />
                            <div className="leftGun" style={{ left: '5%' }}><img src={middleGun} width="30%" /><br /><strong>Miss</strong></div>
                        </div>
                        <div className="col-md-4 leftGunSection" onClick={this.rightGunBox}>
                            <img src={rightGunBox} width="100%" />
                            <div className="leftGun"><img src={rightGun} width="40%" /><br /><strong>Right</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(PickOne);
