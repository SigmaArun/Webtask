import React, { useState } from "react";

import './MovieForm.css';
const MovieForm=(props)=>{
   const [title,setTitle]= useState("");
    const [openingText,setOpeningText]=useState("");
   const[releaseDate,setReleaseDate]= useState("");

   const titleHandler=(event)=>{
    setTitle(event.target.value);
   }
   const openingTextHandler=(event)=>{
    setOpeningText(event.target.value);

   }
   const releaseDateHandler=(event)=>{
    setReleaseDate(event.target.value);
   }

   const formHandler=(event)=>{
    event.preventDefault();

    const formData = {
        title: title,
        openingText: openingText,
        releaseDate: new Date(releaseDate),
      };
      props.addMovieByForm(formData);
      console.log(formData);

      setTitle('');
      setOpeningText('');
      setReleaseDate('');
  
   }

    return(
       <>
      
        <section>
       <form onSubmit={formHandler}>
        <label htmlFor="title">Title</label><br></br>
        <input type="text"
         value={title}
         onChange={titleHandler}
        
        ></input><br></br>
        <label htmlFor="openingText">OpeningText</label><br></br>
        <input type="text"
        value={openingText}
        onChange={openingTextHandler}
        ></input><br></br>
         
         <label htmlFor="releaseDate">ReleaseDate</label><br></br>
         <input
         type="date"
         value={releaseDate}
         onChange={releaseDateHandler}
         ></input><br></br>
          <br></br>
          <button type="submit">Add Movie</button>
         
       </form>
      
       </section>
    
       </>
    )
}
export default MovieForm;