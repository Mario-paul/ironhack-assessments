import React from "react";
import {Link} from "react-router-dom";

import Nav from "./Nav";

const Home = () => {
  return (
    <div id="main">
      <Nav />

      Welcome to the Home page!

      <br/>
      <Link to="/product/free"> <button>Free</button> </Link>    

      <br />
      <Link to="/product/premium"> <button>Premium</button> </Link>

    </div>
  );
};

export default Home;

