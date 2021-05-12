import React from "react";
import { connect } from "react-redux";
import BookCard from "../components/BookCard";

class Books extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <BookCard />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, null)(Books);

// export default Books;
