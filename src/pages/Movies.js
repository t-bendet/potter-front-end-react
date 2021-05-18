import React from "react";
import { connect } from "react-redux";
import { tryFetchMovie, selectMovie } from "../actions";
import MovieCard from "../components/MovieCard";
import { Container, Header, Grid, Image } from "semantic-ui-react";

//TODO where to start?!?!?
const image_base_url = `https://image.tmdb.org/t/p/original/`;

class Movies extends React.Component {
  componentDidMount() {
    const { tryFetchMovie } = this.props;
    tryFetchMovie("671");
    tryFetchMovie("672");
    tryFetchMovie("673");
    tryFetchMovie("674");
    tryFetchMovie("675");
    tryFetchMovie("767");
    tryFetchMovie("12444");
    tryFetchMovie("12445");
    tryFetchMovie("259316");
  }
  renderMoviesList() {
    const { movies, selectMovie } = this.props;
    return movies.map((movie, i) => {
      return (
        <Grid.Column key={i}>
          <Image
            style={{ maxHeight: "100px", maxWidth: "100px" }}
            alt="poster"
            src={`${image_base_url}${movie.data.poster_path}`}
          />
          <button
            onClick={() => selectMovie(movie)}
            className="ui button primary"
          >
            Select
          </button>
          <p>{movie.data.title}</p>
        </Grid.Column>
      );
    });
  }

  render() {
    const { isLoading, error, movies, selectedMovie } = this.props;

    return (
      <Container>
        <Grid columns={9} divided>
          <Grid.Row>
            {isLoading || error || movies.length < 8 || this.renderMoviesList()}
          </Grid.Row>
        </Grid>
        {selectedMovie && <MovieCard data={selectedMovie} />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies),
    selectedMovie: state.selectedMovie,
    isLoading: state.authentication.isLoading,
    error: state.authentication.error,
  };
};

export default connect(mapStateToProps, { tryFetchMovie, selectMovie })(Movies);
