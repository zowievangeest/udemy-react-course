import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'henk'
  }

  manipulateStateHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput
        name={this.state.username}
        changed={this.manipulateStateHandler}
        />
        <UserOutput name="marieke"/>
        <UserOutput name="lotte"/>
        <UserInput
          changed={this.manipulateStateHandler}
          currentName={this.state.username}
        />
      </div>
    );
  }
}

export default App;
