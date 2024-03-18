import classes from './MealsSummery.module.css';
import Card from '../UI/Card';
 const MealsSummery=()=>{
  return(
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
  )
 }
 export default MealsSummery;