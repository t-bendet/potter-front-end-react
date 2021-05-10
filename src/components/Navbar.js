import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="ui container">
        <ul className="ui menu">
          <li className="item">
            <Link to={`/home`}>Home</Link>
          </li>
          <li className="item">
            <Link to={`/books`}>books</Link>
          </li>
          <li className="item">
            <Link to={`/movies`}>Movies</Link>
          </li>
          <li className="item">
            <Link to={`/games`}>Games</Link>
          </li>
          <li className="item">
            <Link to={`/characters`}>Characters</Link>
          </li>
          <li className="item">
            <Link to={`/potter-Api`}>potter-Api</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
