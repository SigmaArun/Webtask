import Card from "../UI/Card";
import classes from './MealsItem.module.css';
// I WILL ADD THIS FUNCTIONALITY LATER SO EVRY ITEM WILL FALL INSIDE THIS COMPONENT 
 const MealsItem=(props)=>{
    return(
    
        <div className={classes.outer}>
            <div className={classes.category1}></div>
            <div className={classes.category2}></div>
            <div className={classes.category3}></div>
           
            
           
        </div>
    );
 }
 export default MealsItem;
