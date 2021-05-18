import React from "react";
import ReactPlayer from "react-player/youtube";

const image_base_url = `https://image.tmdb.org/t/p/original/`;

const youtube_base_url = `https://www.youtube.com/watch?v=`;

const MovieCard = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.tagline}</p>
      <p>{data.overview}</p>
      <div>
        <img
          style={{ maxHeight: "100px", maxWidth: "100px" }}
          src={`${image_base_url}${data.poster_path}`}
          alt="poster"
        />
      </div>
      <hr />
      <h1>Movie Details</h1>
      <p>{data.title}</p>
      <p>
        // Novel writer :{data.credits.crew.find((e) => e.job === "Novel").name}
      </p>
      <p>
        Original Music Composer:
        {
          data.credits.crew.find((e) => e.job === "Original Music Composer")
            .name
        }
      </p>
      <p>
        Director : {data.credits.crew.find((e) => e.job === "Director").name}
      </p>
      <p>
        Screenplay :{" "}
        {data.credits.crew.find((e) => e.job === "Screenplay").name}
      </p>
      <p>budget: {data.budget} $</p>
      <p>release_date : {data.release_date}</p>
      <p>revenue: {data.revenue} $</p>
      <p>runtime:{data.runtime} min</p>
      <p>homepage:{data.homepage}</p>
      <h3>genres</h3>
      {data.genres.map((gen, i) => (
        <p key={i}>{gen.name}</p>
      ))}
      <h3>production_companies</h3>
      {data.production_companies.map((gen, i) => (
        <p key={i}>{gen.name}</p>
      ))}
      <h3>production_countries</h3>
      {data.production_countries.map((gen, i) => (
        <p key={i}>{gen.name}</p>
      ))}
      <h2>actors</h2>
      <p>actor : {data.credits.cast[0].name}</p>
      <p>character : {data.credits.cast[0].character}</p>
      <p>vote_average : {data.vote_average}</p>
      <p>vote_count : {data.vote_count}</p>
    </div>
  );
};
// <ReactPlayer url={`${youtube_base_url}${data.videos.results[0].key}`} />
export default MovieCard;
//**********info */

//title - string
//overview - string
//tagline -string
//poster https://image.tmdb.org/t/p/original/${poster_path} img
//poster2 https://image.tmdb.org/t/p/original/${backdrop_path}   img
//**********credits path */

//"job":Original Music Composer
//"job": "Director
//"job": "Novel"
//"job": "Screenplay"

//**********info */

//budget - string
//release_date - string
//revenue int,
//runtime - int
//"homepage" - link
//genres - array[i].name
//production_companies - array[i].name
//production_countries - array[i].name
//vote_average
//vote_count
