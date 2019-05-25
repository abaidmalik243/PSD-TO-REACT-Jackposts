import React, { Component } from "react";
import { connect } from 'react-redux';
import results from '../img/results.png';
import { fetchLatestResults } from '../redux/actions/myAppActions';
import './style.css';


class Results extends Component {

    componentWillMount() {
        this.props.fetchLatestResults();
    }

    render() {
        return (
            //    4th Box (Results)
            <div className="row" style={{ padding: '30px' }}>
                <div className="jackpost">
                    <img src={results} width="60%" /><span className="jackpostTxt">Results</span>
                </div>
                <div className="col-md-12 jackpostBody">
                    {this.props.results.map((item, index) => {
                        return (
                            <div className="row listRow" key={index}>
                                <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
                                    <span>{item.id}</span>
                                </div>
                                <div className="col-md-3 borderRight">
                                    <img src={require(`../img/${item.icon1}`)} />
                                </div>
                                <div className="col-md-3 borderRight">
                                    <img src={require(`../img/${item.icon2}`)} />
                                </div>
                                <div className="col-md-3">
                                    <img src={require(`../img/${item.icon3}`)} width="50%" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(data) {
    return {
        results: data.MyApp.results
    }
}

export default connect(mapStateToProps, { fetchLatestResults })(Results);
