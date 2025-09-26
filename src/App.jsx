import { useEffect, useState } from "react";
import "./App.css";
import CalorieRecordEdit from "./components/editing/CalorieRecordEdit";
import ListingSection from "./components/calorierecordsrection/ListingSectioon";
import Modal from "react-modal";
import "./ModalStyles.css";
import styles from "./components/editing/CalorieRecordEdit.module.css";
const LOCAL_STORAGE_KEY = "calorieRecords";
import { v4 as uuidv4 } from "uuid";
import TestCoponents from "./components/common/TestCoponents";

function App() {
  const [isModeOpen, setModeOpen] = useState(false);

  const openHandller = () => {
    setModeOpen(true);
  };

  const closeHandller = () => {
    setModeOpen(false);
  };

  const [records, setRecords] = useState();

  function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
  }
  function load() {
    const storegRecords = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storegRecords != null && storegRecords !== "undefined") {
      console.log({ storegRecords });
      setRecords(
        JSON.parse(storegRecords).map((records) => ({
          id: uuidv4(),
          ...records,
          date: new Date(records.date),
          calorie: Number(records.calorie),
        }))
      );
    } else {
      setRecords([]);
      0;
    }
  }
  useEffect(() => {
    if (!records) {
      load();
    } else {
      save();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [records]);

  const onFormSubmit = (record) => {
    const formattDate = {
      ...record,
      date: new Date(record.date),
    };
    setRecords([formattDate, ...records]);

    closeHandller();
  };

  return (
    <>
      <div>
        <h1>Calories Tracking</h1>
        <Modal
          isOpen={isModeOpen}
          onRequestClose={closeHandller}
          contentLabel="Model"
        >
          <CalorieRecordEdit
            onCancle={closeHandller}
            onFormSubmit={onFormSubmit}
          />
        </Modal>
        {records && <ListingSection allRecords={records} />}
        <button className={styles["cancel-btn"]} onClick={openHandller}>
          Track Food
        </button>
      </div>
    </>
  );
}

export default App;
