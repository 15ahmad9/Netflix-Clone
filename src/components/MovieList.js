import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  return (
    <div>
        {/* <h1>hi</h1> */}
      {props.movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;