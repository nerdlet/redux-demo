import React, { Component } from 'react';
import './App.css';
import { voteAngular, voteReact, voteVuejs } from './actions';
//import ReduxDemo from './ReduxDemo';

class App extends Component {
  constructor(props) {
    super(props);
    this.store =this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());

  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact());

  }
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());

  }
  render() {
    return (
      <div className ="jumbotron" style={{'textAlign':'center'}}>
        <img src ="ctsw_logo.png" height ="96" alt="CodingTheSmartWay.com"></img>
          <h2>What is your favourite Front End Framework in 2017?</h2>
          <h4>Click on the Logos below to vote!</h4>
          <br />

          <div className ="row" style={{'paddingLeft':'40%'}}>
            <div className = "col-xs-offset-3 col-xs2">
              <img src ="angular_logo.png" height ="96" alt ="angular" onClick ={this.handleVoteAngular}></img>

            </div>

            <div className = "col-xs2">
                <img src ="react_logo.png" height ="96" alt ="react" onClick ={this.handleVoteReact}></img>
            </div>

             <div className = "col-xs-offset-3 col-xs2">
              <img src ="vuejs.png" height ="96" alt ="vuejs" onClick ={this.handleVoteVuejs}></img>

            </div>


          </div>



      </div>
      
      );
  }
}

export default App;
