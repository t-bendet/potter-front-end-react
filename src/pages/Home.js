import React from "react";

class Home extends React.Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
        <div>this is where the title will be</div>
        <div>i am a carousel waiting to happen</div>
        <div>i am a carousel waiting to happen</div>
        <div>i am a carousel waiting to happen</div>
        <div>i am a carousel waiting to happen</div>
        <footer>i am a proud footer</footer>
      </div>
    );
  }
}

export default Home;
