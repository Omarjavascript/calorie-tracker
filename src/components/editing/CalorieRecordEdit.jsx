import { useState, useEffect } from "react";
import styles from "./CalorieRecordEdit.module.css";

function CalorieRecordEdit(props) {
  const DEFUALT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calorie: 0,
  };
  const [objectRecord, setObjectRecord] = useState(DEFUALT_VALUE);

  const [isFormValide, setIsFormValide] = useState(false);
  useEffect(() => {
    setIsFormValide(objectRecord.content && objectRecord.date);
  }, [objectRecord.date, objectRecord.content]);

  const dateHandller = (event) => {
    setObjectRecord({
      ...objectRecord,
      date: event.target.value,
    });
  };
  const mealHandller = (event) => {
    setObjectRecord({
      ...objectRecord,
      meal: event.target.value,
    });
  };
  const contentHandler = (event) => {
    setObjectRecord({
      ...objectRecord,
      content: event.target.value,
    });
  };
  const calorieHandler = (event) => {
    const value = Number(event.target.value);
    setObjectRecord({
      ...objectRecord,
      calorie: value,
    });
  };
  //###########################################################################################

  const onsubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(objectRecord);
    setObjectRecord(DEFUALT_VALUE);
  };
  const onCancelHandller = () => {
    setObjectRecord(DEFUALT_VALUE);

    props.onCancle();
  };

  return (
    <form className={styles.form} onSubmit={onsubmitHandler}>
      <label></label>
      <label htmlFor="date">Date:</label>
      <input
        value={objectRecord.date}
        type="date"
        name="Date"
        id="date"
        onChange={dateHandller}
      ></input>
      <label htmlFor="meal">Meal:</label>
      <select
        value={objectRecord.meal}
        name="Meal"
        id="meal"
        onChange={mealHandller}
      >
        <option value={"Breakfast"}>Brakfast</option>
        <option value={"Lunch"}>Lunch</option>

        <option value={"Dinner"}>Dinner</option>
      </select>
      <label htmlFor="content">Content:</label>
      <input
        type="text"
        name="Content"
        id="content"
        onChange={contentHandler}
        value={objectRecord.content}
      ></input>
      <label htmlFor="calorie">Calories</label>
      <input
        value={objectRecord.calorie}
        type="number"
        name="calorie"
        id="calorie"
        onChange={calorieHandler}
        className={`${styles["form-input"]} ${
          objectRecord.calorie < 0 ? styles.error : ""
        }`}
      ></input>
      <button disabled={!isFormValide}>Add</button>
      <button onClick={onCancelHandller} type="button">
        Cancel
      </button>
    </form>
  );
}

export default CalorieRecordEdit;
