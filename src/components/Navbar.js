import React from "react";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";

class Navbar extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/books" className="item">
          Books
        </Link>
        <Link to="/movies" className="item">
          Movies
        </Link>
        <Link to="/games" className="item">
          Games
        </Link>
        <Link to="/characters" className="item">
          Characters
        </Link>
        <Link to="/potter-Api" className="item">
          potter Api
        </Link>
        <div className="right menu">
          <Authentication />
        </div>
      </div>
    );
  }
}

export default Navbar;
