

import React from "react";
import './Home.css';
import { Container,Card,Button } from "react-bootstrap";
import europeImage from "../images/homeimages/europe.jpeg";
import asiaImage from "../images/homeImages/asia.jpeg";
import africaImage from "../images/homeImages/africa.jpeg";
import australiaImage from "../images/homeImages/australia.jpeg";
import antarcticaImage from "../images/homeImages/antarctica.jpeg";
import northAmericaImage from "../images/homeImages/northamerica.jpeg";
import southAmericaImage from "../images/homeImages/southamerica.jpeg";

const Home = () => {
    // this is my creativity insted of using divs i used map 

    const buyTicketHandler=()=>{
      alert("This service will be avilable soon..........");
    }

    const tourBookingHandler=()=>{
      alert("This service will be avilable soon thanks for visiting our site")
    }
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
        <button onClick={buyTicketHandler}>BUY TICKETS</button>
      </div>
     
      
    </div>
  ));

  const tourPackages = [
    { id: 1, title: "Europe Tour", price: 1500, imageUrl:  europeImage },
    { id: 2, title: "Asia Tour", price: 1200, imageUrl: asiaImage },
    { id: 3, title: "Africa Tour", price: 1800, imageUrl: africaImage },
    { id: 4, title: "Australia Tour", price: 2000, imageUrl: australiaImage},
    { id: 5, title: "Antarctica Tour", price: 3000, imageUrl:antarcticaImage  },
    { id: 6, title: "North America Tour", price: 2000, imageUrl: northAmericaImage },
    { id: 7, title: "South America Tour", price: 1500, imageUrl: southAmericaImage },
  ];

  const showTourPackages = tourPackages.map((item) => (
    <div key={item.id} className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text><span>{item.price}$</span></Card.Text>
          <Button variant="primary" onClick={tourBookingHandler}>Book Now</Button>
          <Button variant="secondary">More Details</Button>
        </Card.Body>
      </Card>
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
        <h2>Upcoming concerts......</h2>
        {showConcert}
      </div>
      <section>
      <h2 className="text-center my-4 custom-h2">Continent Tour Packages</h2>
      <h4 className="text-center my-4 custom-h4">Booking will start soon.......</h4>
          <div className="row">{showTourPackages}</div>
        </section>
      </Container>
    </>
  );
};

export default Home;
