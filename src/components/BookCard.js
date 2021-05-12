import React from "react";
import HP1 from "../imagesTesting/HP1.jpg";
import ReactCardFlip from "react-card-flip";

const data = {
  Book_Name: "Philosopher's Stone",
  Author: "J.K. Rowling",
  Dimensions: "76,944 words",
  UK_Edition: "1997 Bloomsbury",
  US_Edition: "1998 Scholastic",
  Publication: "1997",
  Alternate_Title: "Harry Potter and the Sorcerer's Stone",
  Abbreviation: "Harry Potter and the Philosopher's Stone",
  Canonicity: "Primary Canon",
  Book_number: 1,
};

class BookCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront="1.5"
        flipSpeedFrontToBack="1.5"
      >
        <div className="ui image">
          <img src={HP1}></img>
          <button
            className="ui bottom attached button"
            onClick={this.handleClick}
          >
            Click to flip
          </button>
        </div>

        <div className="ui card">
          <div className="ui content">
            <div className="ui header">
              Harry Potter and the {data.Book_Name}
            </div>
            <div className="ui meta">{data.Author}</div>
            <div className="ui description">
              Book Number {data.Book_number} In The Series
            </div>
          </div>
          <div class="extra content">
            <p>Publication : {data.Publication}</p>
            <p>Dimensions : {data.Dimensions}</p>
          </div>
          <button
            className="ui bottom attached button"
            onClick={this.handleClick}
          >
            Click to flip
          </button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default BookCard;
