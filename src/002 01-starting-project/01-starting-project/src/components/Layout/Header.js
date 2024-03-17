import React, { Fragment } from "react";
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import Card from "../UI/Card";

 const Header=(props)=>{
    return(
      <Fragment>
        <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="a table full of delicious food"></img>
        </div>
        <div className={classes.centered}>
        <Card>
          <h1>Delicious Food ,Delivered to you</h1>
          
          <p>Choose your favourite meals from our broad selection of avilable meals 
             and enjoy a delicious</p> 
           <p>  lunch or dinner at Home</p>
          
          <p>All our meals are cooked with high quality ingredients ,just in time 
            and ofCourse by </p>
          <p>  experienced chefs!
          </p>
        
        </Card>
        </div>
       
      </Fragment>
    )
 };
 export default Header;