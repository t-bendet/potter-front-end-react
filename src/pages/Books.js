import React from "react";

class Books extends React.Component {
  render() {
    console.log(this.props.history);
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

export default Books;
