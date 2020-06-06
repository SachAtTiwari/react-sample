import logo from './logo.svg';
import { FaBeer, FaAccessibleIcon } from 'react-icons/fa';

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import ScreenCapture from "./ScreenCapture";
import "./style.css";
//import "./test.scss";
import './App.css';

class App extends Component {
  state = {
    name: "GAMO",
    screenCapture: ""
  };

  handleScreenCapture = screenCapture => {
    this.setState({
      screenCapture
    });
  };

  render() {
    const { screenCapture } = this.state;
    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <Fragment>
            <p>Start editing to see some magic happen :)</p>
            <button onClick={onStartCapture}>Capture</button>
            <br />
            <br />
            <img src={screenCapture} />
           <img src={logo} className="App-logo" alt="logo" />
          </Fragment>
        )}
      </ScreenCapture>
    );
  }
}
            //<img width="100"  src='https://svgshare.com/i/LpD.svg' title='' />


//render(<App />, document.getElementById("root"));


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
	<FaBeer />
	<FaAccessibleIcon />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
