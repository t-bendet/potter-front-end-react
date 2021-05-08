import React from "react";
import { connect } from "react-redux";

class Books extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>harry potter series</div>
        <div>i am a carousel waiting to happen</div>
        <div>fantasitc beasts</div>
        <div>i am a carousel waiting to happen</div>
        <div>hogwarts library</div>
        <div>i am a carousel waiting to happen</div>

        <footer>i am a proud footer</footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, null)(Books);

// export default Books;
