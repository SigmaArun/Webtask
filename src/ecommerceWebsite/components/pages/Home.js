

import React from "react";
import './Home.css';
import { Container } from "react-bootstrap";

const Home = () => {
    // this is my creativity insted of using divs i used map 
  const concerts = [
    {
      id: 1,
      date: "JULY 16",
      place: "DELHI",
      location: "BATRA THEATER"
    },
    {
      id: 2,
      date: "JULY 20",
      place: "GHAZIABAD",
      location: "OPULANT MALL"
    },
    {
      id: 3,
      date: "JULY 24",
      place: "LUCKNOW",
      location: "CHAR BAGH THEATER"
    },
    {
      id: 4,
      date: "AUG 5",
      place: "NOIDA",
      location: "GIP MALL"
    }
  ];

  const showConcert = concerts.map((item) => (
    <div key={item.id} className="concert-item">
      <div className="concert-date">
        <span>{item.date}</span>
      </div>
      <div className="concert-place">
        <span>{item.place}</span>
      </div>
      <div className="concert-location">
        <span>{item.location}</span>
      </div>
      <div className="concert-button">
        <button>BUY TICKETS</button>
      </div>
    </div>
  ));

  return (
    <>
    <Container>
      <div className="home">
        <div className="album-button">
          <button>Get our Latest Album</button>
        </div>
        <div className="play-button">
          <button>Play</button>
        </div>
      </div>

      <div className="tours-section">
        <h2>Tours</h2>
        {showConcert}
      </div>
      </Container>
    </>
  );
};

export default Home;
