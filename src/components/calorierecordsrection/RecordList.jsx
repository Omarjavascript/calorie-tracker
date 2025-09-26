/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./RecordList.module.css";

import CalorieRecord from "./CalorieRecord";

function RecordList(props) {
  const [total, setTotal] = useState(0);

  const resultElements = props.records?.length ? (
    <div className="App">
      {props.records.map((record, index) =>
        record.calorie >= 0 ? (
          <CalorieRecord
            key={index}
            recordDate={record.date}
            meal={record.meal}
            content={record.content}
            calorie={record.calorie}
            addCalories={setTotal}
          />
        ) : null
      )}
    </div>
  ) : (
    <div className={styles["no-records"]}>No Records Found</div>
  );

  return (
    <>
      {resultElements}
      <label className={styles["total-calories"]}>
        Total Calories = {total} CALS
      </label>
      <b></b>
    </>
  );
}
export default RecordList;
