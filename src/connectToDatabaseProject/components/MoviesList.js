import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  // here data is commming from app as props and i am assigning through map movie.title to title prop
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={new Date(movie.releaseDate).toLocaleDateString()}
          openingText={movie.openingText}
          onDelete={props.onDeleteMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
