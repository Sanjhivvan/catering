
import React from 'react';
import ReactDOM from 'react-dom';

function HalloweenY(){
  return <h1>Odd</h1>
}

function HalloweenN(){
  return <h1>Even</h1>
}
var a=parseInt(prompt("Enter Number"))
function Halloween(props){
  var a=props.a;
  if(a%2==0){
    return <HalloweenN/>;
  }
  return <HalloweenY/>
}

ReactDOM.render(
  <Halloween a={a} />,
  document.getElementById('root')
);



/*

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hooks from "./Hooks"
import {BrowserRouter} from "react-router-dom"
import Form from './Form';
import Form2 from './Form2';
ReactDOM.render(
  <BrowserRouter>
<App/>
  </BrowserRouter>

  ,document.getElementById("root")); 

  */
  