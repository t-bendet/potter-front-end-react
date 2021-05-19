import React from "react";
import { connect } from "react-redux";
import { tryFetchBooks } from "../actions/index";
import { Container, Header, Image, Segment } from "semantic-ui-react";
import "../styles/books.css";
import {
  HP1,
  HP2,
  HP3,
  HP4,
  HP5,
  HP6,
  HP7,
  HP8,
  HP9,
  HP10,
  HP11,
  HP12,
} from "../images";
const arr = [HP1, HP2, HP3, HP4, HP5, HP6, HP7, HP8, HP9, HP10, HP11, HP12];
class Books extends React.Component {
  componentDidMount() {
    this.props.tryFetchBooks();
  }

  renderBooks() {
    const { books } = this.props;
    return books.map((book, i) => {
      return (
        <a className="card" key={book.Book_Name}>
          <div className="front">
            <Image
              style={{
                height: "100%",
              }}
              alt="poster"
              src={arr[i]}
            />
          </div>
          <div className="back">
            <div>
              <h3>Harry Potter and the {book.Book_Name}</h3>
              <p>{book.Author}</p>
              <div>Book Number {book.Book_number} In The Series</div>

              <p>Publication : {book.Publication}</p>
              <p>Dimensions : {book.Dimensions}</p>
              <p>{book.Description}</p>
            </div>
          </div>
        </a>
      );
    });
  }
  render() {
    const { books, isLoading, error } = this.props;
    return (
      <Container>
        <div className="content">
          {!isLoading && books && this.renderBooks()}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    isLoading: state.books.isLoading,
    error: state.books.error,
  };
};

export default connect(mapStateToProps, { tryFetchBooks })(Books);
