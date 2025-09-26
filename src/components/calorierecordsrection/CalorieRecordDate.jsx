import styled from "./CalorieRecordDate.module.css";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecordDate(props) {
  const day = props.recordDate.getDate();
  const month = props.recordDate.toLocaleString("en-US", { month: "long" });
  const year = props.recordDate.getFullYear();
  return (
    <StyledRecordCell>
      <div className={styled["record-date-day"]}>{day}</div>
      <div className={styled["record-date-month"]}>{month}</div>
      <div className={styled["record-date-year"]}>{year}</div>
    </StyledRecordCell>
  );
}
export default CalorieRecordDate;
