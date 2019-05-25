import React, { Component } from "react";
import { connect } from 'react-redux';
import pickOne from '../img/pickOne.png';
import widthdraw from '../img/widthdraw.png';
import './style.css';


class Balance extends Component {

    widthdraw = () => {
        console.log('Console => Widthdraw Button');
    }

    render() {
        return (
            //    last Box (Balances) 
            <div className="row" style={{ padding: '30px' }}>
                <div className="jackpost">
                    <img src={pickOne} width="60%" /><span className="jackpostTxt">Balances</span>
                </div>
                <div className="col-md-12 jackpostBody">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="balanceValue">
                            <span>{this.props.balanceValue1}</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="balanceValue">
                            <span>{this.props.balanceValue2}</span>
                            </div>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-md-12" style={{ cursor: 'pointer' }} onClick={this.widthdraw}>
                            <img src={widthdraw} width="60%" /><span className="jackpostTxt" style={{ top: '35%' }}>Widthdraw</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(data) {
    return {
        balanceValue1: data.MyApp.balanceValue1,
        balanceValue2: data.MyApp.balanceValue2
    }
}

export default connect(mapStateToProps, null)(Balance);
