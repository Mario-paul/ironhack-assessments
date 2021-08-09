import React from "react";
import axios from 'axios';

class BreweryList extends React.Component {
  state = { breweries: [] };
  
  async componentDidMount () {
  try {
    // Make the `axios` request, using `await`    
   const res = await axios.get(`https://api.openbrewerydb.org/breweries`)
   //console.log(res.data)
   this.setState({breweries : res.data})
  } catch(error){
    // Handle the error
  }
}  
  
  //   YOUR CODE HERE

  render() {
    return (
  <div>
     {this.state.breweries.map(post => (
        <div className="brewery">
         <p>  {post.name}  </p>
        </div>
        ))}
      </div>
    );
  }
}

export default BreweryList;
