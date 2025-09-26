import RecordList from "./RecordList";

import styled from "./ListingSectioon.module.css";
import { useEffect, useState } from "react";
import TestCoponents from "../common/TestCoponents";

function ListingSection(props) {
  const [filterRecords, setFilterRecords] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { allRecords } = props;
  useEffect(() => {
    setFilterRecords(allRecords.filter(dateFilter));

    return () => clearTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]); //لو تغير التاريخ
  const dateFilter = (record) => {
    const recordDate = new Date(record.date);
    return (
      recordDate.getDate() === currentDate.getDate() &&
      recordDate.getMonth() === currentDate.getMonth() &&
      recordDate.getFullYear() === currentDate.getFullYear()
    );
  };
  const onChangeDateHandller = (event) => {
    event.preventDefault();
    setCurrentDate(new Date(event.target.value));
  };

  return (
    <>
      <label className={styled["listing-picker-label"]} htmlFor="ListingDay">
        Select Date:
      </label>
      <input
        id="ListingDay"
        type="date"
        className={styled["listing-picker-input"]}
        value={currentDate.toISOString().split("T")[0]}
        onChange={onChangeDateHandller}
      ></input>
      <RecordList records={filterRecords} />
    </>
  );
}
export default ListingSection;
