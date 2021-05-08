import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Link to={`/home`}>Home</Link>
        <Link to={`/books`}>books</Link>
        <Link to={`/movies`}>Movies</Link>
      </div>
    );
  }
}

export default Navbar;
