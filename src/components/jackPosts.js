import React, { Component } from "react";
import { connect } from 'react-redux';
import Jackposts from '../img/jackposts.png';
import './style.css';

class JackPosts extends Component {
    render() {
        return (
            // 1st Box (JackPosts) 
            < div className="row" style={{ padding: '30px' }}>
                <div className="jackpost">
                    <img src={Jackposts} width="60%" /><span className="jackpostTxt">Jackposts</span>
                </div>
                <div className="col-md-12 jackpostBody">
                    <span className="jackpostBodyTxt">{this.props.JackPostsNumber}</span>
                </div>
            </div >
        );
    }
}

function mapStateToProps(data) {
    // console.log('data is: ', data)
    return {
        JackPostsNumber: data.MyApp.JackPostsNumber
    }
}

export default connect(mapStateToProps, null)(JackPosts);













// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import Jackposts from '../img/jackposts.png';
// import pickOne from '../img/pickOne.png';
// import Waitlist from '../img/waitlist.png';
// import waitlist02 from '../img/waitlist02.png';
// import waitlist04 from '../img/waitlist04.png';
// import results from '../img/results.png';
// import result02 from '../img/result02.png';
// import heart from '../img/heart.png';
// import bonusArea from '../img/bonusArea.png';
// import start from '../img/start.png';
// import finish from '../img/finish.png';
// import leftGun from '../img/leftGun.png'
// import leftGunBox from '../img/leftGunBox.png'
// import middleGunBox from '../img/middleGunBox.png'
// import middleGun from '../img/missGun.png'
// import rightGunBox from '../img/rightGunBox.png'
// import rightGun from '../img/rightGun.png'
// import widthdraw from '../img/widthdraw.png';
// import './MyApp.css';

// class MyApp extends Component {
//     render() {
//         return (
//             <div className="container-fluid containerFluid">
//                 <div className="row">
//                     <div className="col-md-4" style={{ backgroundColor: '#eeeeee' }}>
//                         {/* 1st Box (JackPosts) */}
//                         <div className="row" style={{ padding: '30px' }}>
//                             <div className="jackpost">
//                                 <img src={Jackposts} width="60%" /><span className="jackpostTxt">Jackposts</span>
//                             </div>
//                             <div className="col-md-12 jackpostBody">
//                                 <span className="jackpostBodyTxt">{this.props.resultNumber}</span>
//                             </div>
//                         </div>
//                         {/* 2nd Box (Pick One) */}
//                         <div className="row" style={{ padding: '30px' }}>
//                             <div className="jackpost">
//                                 <img src={pickOne} width="60%" /><span className="jackpostTxt">Pick One</span>
//                             </div>
//                             <div className="col-md-12 jackpostBody">
//                                 <div className="row">
//                                     <div className="col-md-4 leftGunSection">
//                                         <img src={leftGunBox} width="100%" />
//                                         <div className="leftGun"><img src={leftGun} width="40%" /><br /><strong>Left</strong></div>
//                                     </div>
//                                     <div className="col-md-4 leftGunSection">
//                                         <img src={middleGunBox} width="100%" />
//                                         <div className="leftGun" style={{ left: '5%' }}><img src={middleGun} width="30%" /><br /><strong>Miss</strong></div>
//                                     </div>
//                                     <div className="col-md-4 leftGunSection">
//                                         <img src={rightGunBox} width="100%" />
//                                         <div className="leftGun"><img src={rightGun} width="40%" /><br /><strong>Right</strong></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* end 2nd Box */}

//                         {/* 3rd Box (Waitlist) */}
//                         <div className="row" style={{ padding: '30px' }}>
//                             <div className="jackpost">
//                                 <img src={Waitlist} width="60%" /><span className="jackpostTxt">Waitlist</span>
//                             </div>
//                             <div className="col-md-12 jackpostBody">
//                                 {/* 1 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>21</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={rightGun} />
//                                     </div>
//                                     <div className="col-md-6">
//                                         <span>0x6c8258d3</span>
//                                     </div>
//                                 </div>
//                                 {/* 2 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>22</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={waitlist02} />
//                                     </div>
//                                     <div className="col-md-6">
//                                         <span>0x6c8258d3</span>
//                                     </div>
//                                 </div>
//                                 {/* 3 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>23</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={leftGun} />
//                                     </div>
//                                     <div className="col-md-6">
//                                         <span>0x6c8258d3</span>
//                                     </div>
//                                 </div>
//                                 {/* 4 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>24</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={waitlist04} />
//                                     </div>
//                                     <div className="col-md-6">
//                                         <span>0x6c8258d3</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* end 3rd Box */}

//                         {/* 4th Box (Results) */}
//                         <div className="row" style={{ padding: '30px' }}>
//                             <div className="jackpost">
//                                 <img src={results} width="60%" /><span className="jackpostTxt">Results</span>
//                             </div>
//                             <div className="col-md-12 jackpostBody">
//                                 {/* 1 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>#531</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={heart} />
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={result02} />
//                                     </div>
//                                     <div className="col-md-3">
//                                         <img src={result02} width="50%" />
//                                     </div>
//                                 </div>
//                                 {/* 2 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>#532</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={heart} />
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={result02} />
//                                     </div>
//                                     <div className="col-md-3">
//                                         <img src={result02} width="50%" />
//                                     </div>
//                                 </div>
//                                 {/* 3 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>#533</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={heart} />
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={result02} />
//                                     </div>
//                                     <div className="col-md-3">
//                                         <img src={result02} width="50%" />
//                                     </div>
//                                 </div>
//                                 {/* 4 */}
//                                 <div className="row listRow">
//                                     <div className="col-md-3 borderRight" style={{ textAlign: 'left' }}>
//                                         <span>#534</span>
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={heart} />
//                                     </div>
//                                     <div className="col-md-3 borderRight">
//                                         <img src={result02} />
//                                     </div>
//                                     <div className="col-md-3">
//                                         <img src={result02} width="50%" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* end 4th Box */}

//                         {/* 5th Box (Bonus Area) */}
//                         <div className="row" style={{ padding: '30px' }}>
//                             <div className="jackpost">
//                                 <img src={bonusArea} width="60%" /><span className="jackpostTxt">Bonus Area</span>
//                             </div>
//                             <div className="col-md-12 jackpostBody">
//                                 <div className="row">
//                                     <div className="col-md-2"></div>
//                                     <div className="col-md-4 leftGunSection">
//                                         <img src={middleGunBox} width="100%" />
//                                         <div className="leftGun"><img src={start} width="30%" /><br /><strong>Start</strong></div>
//                                     </div>
//                                     <div className="col-md-4 leftGunSection">
//                                         <img src={rightGunBox} width="100%" />
//                                         <div className="leftGun"><img src={finish} width="40%" /><br /><strong>Finish</strong></div>
//                                     </div>
//                                     <div className="col-md-2"></div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* end 5th Box */}


//                         {/* last Box (Balances) */}
//                         <div className="row" style={{ padding: '30px' }}>
//                             <div className="jackpost">
//                                 <img src={pickOne} width="60%" /><span className="jackpostTxt">Balances</span>
//                             </div>
//                             <div className="col-md-12 jackpostBody">
//                                 <div className="row">
//                                     <div className="col-md-6" style={{ border: '1px solid white', margin: 'auto' }}>
//                                         <span style={{ fontSize: '13px' }}>Cuntomer Balance #1</span>
//                                     </div>
//                                     <div className="col-md-6" style={{ border: '1px solid white', margin: 'auto' }}>
//                                         <span style={{ fontSize: '13px' }}>Cuntomer Balance #2</span>
//                                     </div>
//                                 </div><br />
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <img src={widthdraw} width="60%" /><span className="jackpostTxt" style={{ top: '35%' }}>Widthdraw</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* end last Box */}


//                     </div>
//                     <div className="col-md-8"></div>
//                 </div>
//             </div>
//         );
//     }
// }

// function mapStateToProps(data) {
//     console.log('data is: ', data)
//     return {
//         resultNumber: data.MyApp.resultNumber
//     }
// }

// export default connect(mapStateToProps, null)(MyApp);
