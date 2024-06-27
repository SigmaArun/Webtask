import React, { useState,useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import MovieForm from './components/MovieForm';

function App() {
     const[movies,setMovies]=useState([]);
     const[isLoading,setIsLoading]=useState(false);
     const[error,setError]=useState(null);
     const [retrying, setRetrying] = useState(false); 

        // this is post request very simple ,No state is updating 
       const addMovieByForm= async (movieData)=>{
    
         const response=await fetch('https://akecommerce-app-default-rtdb.firebaseio.com/movies.json', {
         
           method:'POST',
           body: JSON.stringify(movieData),
           headers:{
           'content-type':' application/json'
           }
         
         });
         if (!response.ok) {
          throw new Error('Failed to add movie');
        }
    
       }

      // 5 sec calkl when url is wrong  when error in fetch 
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

      




    const fetchMoviesHandler= useCallback( async ()=>{
      setIsLoading(true);
      setError(null);
      try{
     const response=await  fetch('https://akecommerce-app-default-rtdb.firebaseio.com/movies.json');
     const data=await response.json(); 
     const loadedMovies=[];

     for(const key in data){
      loadedMovies.push({
        id:key,
        title:data[key].title,
        openingText:data[key].openingText,
        releaseDate:data[key].releaseDate,
      })
     }

     if(!response.ok){
      throw new Error('something went wrong......Retrying');
     }

   
     setMovies(loadedMovies);
     setIsLoading(false);
     setRetrying(false);
      }catch(error){
        setError(error.message);
        setRetrying(true);    // here if this state get updated then useeffect get called for 5 sec 
      }
     },[]);

      // adding useeffect to load at first render cycle for the very first time

       useEffect(()=>{
           fetchMoviesHandler();
       },[fetchMoviesHandler]);

      // to delete movie 

      const deleteMovieHandler = async (id) => {
        try {
          const response = await fetch(`https://akecommerce-app-default-rtdb.firebaseio.com/movies/${id}.json`, {
            method: 'DELETE'
          });
    
          if (!response.ok) {
            throw new Error('Failed to delete movie');
          }
    
          setMovies((prevMovies) => prevMovies.filter(movie => movie.id !== id));
        } catch (error) {
          setError(error.message);
        }
      };
         // cancel 
         const cancelRetryHandler = () => {
          setRetrying(false);
          setIsLoading(false);
          setError('Retrying cancelled.');
        };
  return (
    <React.Fragment>
      <section>
      <MovieForm addMovieByForm={addMovieByForm}></MovieForm>
      </section>
      <section>
       
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {retrying && (
          <button onClick={cancelRetryHandler}>Cancel Retry</button>
        )}
      </section>
      <section>
      {!isLoading && <MoviesList movies={movies}  onDeleteMovie={deleteMovieHandler}  />}
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
