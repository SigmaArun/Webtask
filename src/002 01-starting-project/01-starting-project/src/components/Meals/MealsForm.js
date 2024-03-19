import classes from './MealsForm.module.css';
 const MealsForm=()=>{
  return(
  
       <form className={classes.form}>
        <div>
            <label>Amount</label>
            <input  id="amount" type="number" className={classes.input}></input>
        </div>
        <div>
            <button type="submit"   className={classes.button}>+ ADD</button>
        </div>
       </form>
     
  );
 }
 export default MealsForm;