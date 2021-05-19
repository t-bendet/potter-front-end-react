import React from "react";
import MovieCredits from "./MovieCredits";
import { Container, Grid, Image, Embed, Header } from "semantic-ui-react";

const image_base_url = `https://image.tmdb.org/t/p/original/`;

const MovieCard = ({ data }) => {
  return (
    <Container
      style={{
        backgroundColor: "#ffffffbb",
        padding: "2rem",
        borderRadius: "3px",
        backdropFilter: "blur(10px)",
      }}
    >
      <Grid centered>
        <Grid.Column floated="left" width={9}>
          <Header as="h1">{data.title}</Header>
          <Header as="h5">"{data.tagline}...."</Header>
          <p>{data.overview}</p>
          <Embed
            id={`${data.videos.results[0].key}`}
            source="youtube"
            autoplay={false}
          />
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <Image src={`${image_base_url}${data.backdrop_path}`} alt="poster" />
          <MovieCredits data={data} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default MovieCard;
