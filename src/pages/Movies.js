import React from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../actions";
import MovieCard from "../components/movies/MovieCard";

//TODO where to start?!?!?
//useMemo?
class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchMovie("671");
  }
  render() {
    return (
      <div>
        {this.props.movie.title && <MovieCard data={this.props.movie} />}
        <h1>movie</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movie: state.movie };
};

export default connect(mapStateToProps, { fetchMovie })(Movies);
