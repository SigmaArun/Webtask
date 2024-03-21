import classes from "./MealsSummery.module.css";

const MealsSummery = () => {
  return (
    <section className={classes.mealsSummary}>
      <div className={classes.centered}>
        <div>
          <h1>Delicious Food ,Delivered to you</h1>
        </div>
        <div className={classes.paragraphs}>
          <p>
            Choose your favourite meals from our broad selection of avilable
            meals and enjoy a delicious
          </p>
          <p> lunch or dinner at Home</p>

          <p>
            All our meals are cooked with high quality ingredients ,just in time
            and ofCourse by{" "}
          </p>
          <p> experienced chefs!</p>
        </div>
      </div>
    </section>
  );
};
export default MealsSummery;
