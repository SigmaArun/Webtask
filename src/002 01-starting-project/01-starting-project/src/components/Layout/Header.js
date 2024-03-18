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
      
       
      </Fragment>
    )
 };
 export default Header;