import React from "react";
import Home from "./Home";
import About from './About';
import Services from './Services';
import Food from './Food';
import Order from './Order';
import Client from './Client';
import Contact from './Contact';
import {Route,Switch} from "react-router-dom"
function App() {
  return (
    <>
      <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/samplemenu" component={Food}/>
          <Route exact path="/order" component={Order}/>
          <Route exact path="/client" component={Client}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={Home}/>
      </Switch>
    </>
  );
}

export default App;
