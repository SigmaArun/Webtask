import React from 'react';

import classes from './Movie.module.css';

// i am designing component here so , i have to bring data here from parent so props. title
const Movie = (props) => {

  const deleteMovieHandler=()=>{
    props.onDelete(props.id);
  }
 
  return (
    
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteMovieHandler}>Delete Movie</button>
    </li>
  );
};

export default Movie;
