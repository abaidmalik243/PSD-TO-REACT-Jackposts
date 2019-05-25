import React, { Component } from "react";
import { connect } from 'react-redux';
import Waitlist from '../img/waitlist.png';
import { fetchLatestWaitList } from '../redux/actions/myAppActions';
import './style.css';


class WaitList extends Component {

    componentWillMount() {
        this.props.fetchLatestWaitList();
    }

    render() {
        return (
            //  3rd Box (Waitlist) 
            <div className="row" style={{ padding: '30px' }}>
                <div className="jackpost">
                    <img src={Waitlist} width="60%" /><span className="jackpostTxt">Waitlist</span>
                </div>
                <div className="col-md-12 jackpostBody">
                    {this.props.waitList.map((item, index) => {
                        return (
                            <div className="row listRow" key={index}>
                                <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
                                    <span>{item.id}</span>
                                </div>
                                <div className="col-md-3 borderRight">
                                    <img src={require(`../img/${item.icon}`)} />
                                </div>
                                <div className="col-md-6">
                                    <span>{item.hax}</span>
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
        waitList: data.MyApp.waitList,
    }
}

export default connect(mapStateToProps, { fetchLatestWaitList })(WaitList);
