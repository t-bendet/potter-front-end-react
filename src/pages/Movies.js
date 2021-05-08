import React from "react";

class Movies extends React.Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
        <div>this is where the title will be</div>
        <div>Movie Component</div>
        <div>Movie Component</div>
        <div>Movie Component</div>
        <div>Movie Component</div>

        <footer>i am a proud footer</footer>
      </div>
    );
  }
}

export default Movies;
