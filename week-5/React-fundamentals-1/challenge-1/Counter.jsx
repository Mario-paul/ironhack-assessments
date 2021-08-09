import React from "react";
import { useState, useEffect } from 'react';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {counter: 0};
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
    
  increase () {
    this.setState({counter : this.state.counter + 1})
  }
  
  decrease () {
    this.setState({counter : this.state.counter - 1})
  }
  
  render() {   
    return (
      <div>
      <button className="increment" onClick={this.increase}></button>
      <button className="decrement" onClick={this.decrease}></button>      
      <h1>{this.state.counter}</h1>
        </div>
      
    );
  }
}

// hint: component needs to be exported to be used elsewhere
export default Counter
