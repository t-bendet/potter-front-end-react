import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../actions";
import MovieCard from "../components/MovieCard";

//TODO where to start?!?!?
//useMemo?
class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchMovie("671");
    console.log(this.props.movie);
  }
  render() {
    return (
      <div>
        <h1>movie</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movie: state.movie };
};

export default connect(mapStateToProps, { fetchMovie })(Movies);

//<MovieCard data={this.props.movie} />
