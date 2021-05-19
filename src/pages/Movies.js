import React from "react";
import { connect } from "react-redux";
import { tryFetchMovie, selectMovie } from "../actions";
import MovieCard from "../components/movies/MovieCard";
import { Container, Grid, Card, Icon, Image } from "semantic-ui-react";

//TODO change postr to background and move table up
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
        <Grid.Column centered key={i}>
          <Image
            size="small"
            alt="poster"
            src={`${image_base_url}${movie.data.poster_path}`}
            onClick={() => selectMovie(movie)}
          />
        </Grid.Column>
      );
    });
  }

  render() {
    const { isLoading, error, movies, selectedMovie } = this.props;

    return (
      <Container style={{ paddingBottom: "3rem", marginBottom: "1rem" }}>
        <Grid columns={9} divided>
          <Grid.Row style={{ paddingBottom: "1rem", marginBottom: "1rem" }}>
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

//
