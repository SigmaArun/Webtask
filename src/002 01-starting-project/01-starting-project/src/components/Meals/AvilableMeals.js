
import classes from './AvilableMeals.module.css';
import Card from '../UI/Card';
const Meals_Items=[
    {
       id:'1',
       name:'AALOO paratha',
       description: 'Best paratha with huge butter Loaded',
       price: 100.00,
    },
    {
       id:'2',
       name:'Fish Curry',
       description: 'Best and Fresh fish from Arabaian sea with veggies',
       price: 500.00,
    },
    {
       id:'3',
       name:'Idley Dosha',
       description: 'Best taste of south indian dosha ',
       price: 100.00,
    },
    {
       id:'4',
       name:'Veggy King Burger ',
       description: 'King Burger with sauce ',
       price: 100.00,
    },
    {
       id:'5',
       name:'vada Pao',
       description: 'maharastrian vada pao with lovely taste',
       price: 100.00,
    },
   
];
 const AvilableMeals=()=>{
    const mealsList= Meals_Items.map((meal)=>
    <li key={meal.id}>
    <div>{meal.name}</div>
    <div>{meal.description}</div>
    <div>${meal.price}</div>
</li>
  
     );
    return(
        <div className={classes.centered}>
        <Card>
        
            <ul>
              {mealsList}
            </ul>
        
        </Card>
        </div>
    );
 }
 export default AvilableMeals;