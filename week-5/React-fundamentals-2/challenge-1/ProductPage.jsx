import React from "react";
import Nav from "./Nav";
import Home from "./HomePage"

class ProductPage extends React.Component {
 state = {
    title: 'Loading...',
  }
  
   // YOUR CODE HERE
  componentDidMount() {
    const handle = this.props.match.params.type
    if (handle === 'free') {
      this.setState({title : 'Free Account'})
  } if (handle === 'premium') {
      this.setState({title : 'Premium Account'})
  }
       console.log(handle)
}
  
  
  render() {    
    /* DO NOT CHANGE ANY OF THE CODE IN THE `render()`. 
     ALL OF YOUR WORK SHOULD BE DONE INSIDE `componentDidMount()`` 
     WHERE INDICATED ABOVE BY THE COMMENT `// YOUR CODE HERE`
    */
    return (
      <div id="main">
        <Nav />

        <h2>Product Page</h2>

        <p>{this.state.title}</p>

      </div>
    );
  }
};

export default ProductPage;

