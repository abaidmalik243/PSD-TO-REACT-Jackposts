import React, { Component } from "react";
import { connect } from 'react-redux';
import bonusArea from '../img/bonusArea.png';
import start from '../img/start.png';
import finish from '../img/finish.png';
import middleGunBox from '../img/middleGunBox.png'
import rightGunBox from '../img/rightGunBox.png'
import './style.css';


class BonusArea extends Component {

    start = () => {
        console.log('Console => Start Button');
    }
    finish = () => {
        console.log('Console => Finish Button');
    }

    render() {
        return (
            //    5th Box (Bonus Area) 
            <div className="row" style={{ padding: '30px' }}>
                <div className="jackpost">
                    <img src={bonusArea} width="60%" /><span className="jackpostTxt">Bonus Area</span>
                </div>
                <div className="col-md-12 jackpostBody">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 leftGunSection" onClick={this.start}>
                            <img src={middleGunBox} width="100%" />
                            <div className="leftGun"><img src={start} width="30%" /><br /><strong>Start</strong></div>
                        </div>
                        <div className="col-md-4 leftGunSection" onClick={this.finish}>
                            <img src={rightGunBox} width="100%" />
                            <div className="leftGun"><img src={finish} width="40%" /><br /><strong>Finish</strong></div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(data) {
    // console.log('data is: ', data)
    return {
        resultNumber: data.MyApp.resultNumber
    }
}

export default connect(mapStateToProps, null)(BonusArea);
