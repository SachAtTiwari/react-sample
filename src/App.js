import logo from './logo.svg';
import { FaFacebookF, FaTwitterSquare, FaYoutube, FaCloud } from 'react-icons/fa';

import React, { Component, Fragment } from "react";
//import { render } from "react-dom";
import ScreenCapture from "./ScreenCapture";
import "./style.css";
//import "./test.scss";
import './App.css';
import * as rasterizeHTML from 'rasterizehtml';

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



  setInlineStyles = (svg) => {
 
    const explicitlySetStyle = function(element) {
    let cSSStyleDeclarationComputed = getComputedStyle(element);
    let i, len, key, value;
    let svgExcludedValues = ['height', 'width', 'min-height', 'min-width'];
    let computedStyleStr = "";
    for (i=0, len=cSSStyleDeclarationComputed.length; i<len; i++) {
      key=cSSStyleDeclarationComputed[i];
      if (!((element instanceof SVGElement) && svgExcludedValues.indexOf(key) >= 0)) {
        value=cSSStyleDeclarationComputed.getPropertyValue(key);
        computedStyleStr+=key+":"+value+";";
      }
    }
    element.setAttribute('style', computedStyleStr);
  }
 
  const traverse = function(obj) {
    let tree = [];
    tree.push(obj);
    visit(obj);
    function visit(node) {
      if (node && node.hasChildNodes()) {
        let child = node.firstChild;
        while (child) {
          if (child.nodeType === 1 && child.nodeName !== 'SCRIPT'){
            tree.push(child);
            visit(child);
          }
          child = child.nextSibling;
        }
      }
    }
    return tree;
  }
  // hardcode computed css styles inside SVG
  let allElements = traverse(svg);
  let i = allElements.length;
  while (i--){
    explicitlySetStyle(allElements[i]);
  }
 }


 handleClickTakeScreenShot1 = () => {
   //const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = this.state
   const body = document.querySelector('body')
   this.setInlineStyles(body);
 
   var htmlContent = body.innerHTML;
   // Create a canvas element
   var canvas = document.createElement('canvas');
   canvas.setAttribute('id', 'canvas');
   // Set the width and height of the canvas to match the element's
   canvas.width = body.getBoundingClientRect().width;
   canvas.height = body.getBoundingClientRect().height;
   // Append the canvas to your page, this does not have to be done on the body
   document.body.appendChild(canvas);
   // Draw the HTML
   rasterizeHTML.drawHTML(htmlContent, canvas);
 
 
 }
  

  render() {
    const { screenCapture } = this.state;
    return (
	<div>
          <Fragment>
            <div className="textCenter">
            	<img  src={logo} className="App-logo" alt="logo" />
            	<FaFacebookF />
	        <FaCloud />
	        <FaTwitterSquare />
                <FaYoutube />
                <br />
               <button onClick={this.handleClickTakeScreenShot1}>Capture 1</button>
	    </div>
          </Fragment>
       <br/>
      {/*<ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <Fragment>
            <div className="textCenter">
            	<img  src={logo} className="App-logo" alt="logo" />
            	<FaFacebookF />
	        <FaCloud />
	        <FaTwitterSquare />
                <FaYoutube />
                <br />
               <button onClick={onStartCapture}>Capture 2</button>
	    </div>
            <br />
            <img alt="Test" src={screenCapture} />
          </Fragment>
        )}
      </ScreenCapture>*/}
	</div>
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
