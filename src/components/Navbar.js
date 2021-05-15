import React from "react";
import { Link } from "react-router-dom";
import UserStatusBtn from "./UserStatusBtn";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="ui secondary pointing menu red"
        style={{ backgroundColor: "white" }}
      >
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
        <Link to="/potter-Api" className="item">
          Potter Api
        </Link>
        <div className="right menu">
          <UserStatusBtn />
        </div>
      </div>
    );
  }
}

export default Navbar;
