import React from "react";
import { connect } from "react-redux";
import { tryFetchMovie } from "../actions";
import MovieCard from "../components/MovieCard";

//TODO where to start?!?!?
//useMemo?
class Movies extends React.Component {
  componentDidMount() {
    this.props.tryFetchMovie("671");
    this.props.tryFetchMovie("672");
    this.props.tryFetchMovie("673");
    this.props.tryFetchMovie("674");
    this.props.tryFetchMovie("675");
    this.props.tryFetchMovie("767");
    this.props.tryFetchMovie("12444");
    this.props.tryFetchMovie("12445");
    this.props.tryFetchMovie("259316");
  }
  renderMovies() {
    return this.props.movies.map((movie, i) => {
      if (!movie.loading && !movie.error) {
        return <MovieCard data={movie.data} />;
      }
      if (movie.error) {
        console.log(movie.error);
        return <h1>{JSON.parse(movie.error).status_message}</h1>;
      }

      return (
        <div class="ui segment">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>testing</h1>
        {this.renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: Object.values(state.movies) };
};

export default connect(mapStateToProps, { tryFetchMovie })(Movies);
