/* eslint-disable react-hooks/rules-of-hooks */
import styled from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/StyledRecordCell";
import { useEffect } from "react";

function CalorieRecord(props) {
  if (props.calorie < 0) {
    return null;
  }
  useEffect(() => {
    props.addCalories((prevTotal) => prevTotal + props.calorie);
    return () => {
      props.addCalories((prevTotal) => prevTotal - props.calorie);
    };
  });
  return (
    <ul className={styled.record}>
      <CalorieRecordDate recordDate={props.recordDate} />
      <li className={styled.meal}>{props.meal}</li>
      <li className={styled.content}>{props.content}</li>
      <li className={styled["record-calories"]}>
        <StyledRecordCell>{props.calorie} cal</StyledRecordCell>
      </li>
    </ul>
  );
}
export default CalorieRecord;
