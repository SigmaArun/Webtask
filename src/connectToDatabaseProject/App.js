import React, { useState,useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
     const[movies,setMovies]=useState([]);
     const[isLoading,setIsLoading]=useState(false);
     const[error,setError]=useState(null);
     const [retrying, setRetrying] = useState(false);

      // 5 sec calkl
     useEffect(() => {
      let retryTimeout;
      if (retrying) {
        retryTimeout = setTimeout(() => {
          fetchMoviesHandler();
        }, 5000);
      }
      return () => {
        if (retryTimeout) {
          clearTimeout(retryTimeout);
        }
      };
    }, [retrying]);





    const fetchMoviesHandler=async ()=>{
      setIsLoading(true);
      setError(null);
      try{
     const response=await  fetch('https://swapi.dev/api/film/');
     const data=await response.json(); 
     if(!response.ok){
      throw new Error('something went wrong......Retrying');
     }

     // the data has results array from result use id,title, opening crawl ,release date below
     const transformMoviesData=data.results.map((movieData)=>{
      return {
        id:movieData.episode_id,
        title:movieData.title,
        openingText:movieData.opening_crawl,
        releaseDate:movieData.release_date,
      }
     });
     setMovies(transformMoviesData);
     setIsLoading(false);
     setRetrying(false);
      }catch(error){
        setError(error.message);
        setRetrying(true);
      }
     }


         // cancel 
         const cancelRetryHandler = () => {
          setRetrying(false);
          setIsLoading(false);
          setError('Retrying cancelled.');
        };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {retrying && (
          <button onClick={cancelRetryHandler}>Cancel Retry</button>
        )}
      </section>
      <section>
      {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Movies are Loading...</p>}
        {!isLoading && movies.length === 0 && !error && (
          <p>No movies here. Click to fetch movies.</p>
        )}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
