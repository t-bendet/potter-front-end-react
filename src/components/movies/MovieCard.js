import React from "react";
import MovieCredits from "./MovieCredits";
import { Container, Grid, Image, Embed, Header } from "semantic-ui-react";

const image_base_url = `https://image.tmdb.org/t/p/original/`;

const MovieCard = ({ data }) => {
  return (
    <div style={{ backgroundColor: "white", padding: "2rem" }}>
      <Header as="h1">{data.title}</Header>
      <Header as="h5">"{data.tagline}...."</Header>
      <Grid centered>
        <Grid.Column floated="left" width={9}>
          <p>{data.overview}</p>
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <Image src={`${image_base_url}${data.backdrop_path}`} alt="poster" />
        </Grid.Column>

        <hr />
        <Grid.Column verticalAlign="middle" width={9}>
          <Embed
            id={`${data.videos.results[0].key}`}
            source="youtube"
            autoplay={false}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <MovieCredits data={data} />
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default MovieCard;
